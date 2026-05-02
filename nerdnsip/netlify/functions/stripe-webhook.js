const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = 'Registrations';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      webhookSecret
    );

    // Handle successful checkout
    if (stripeEvent.type === 'checkout.session.completed') {
      const session = stripeEvent.data.object;
      await recordAttendance(session);
      
      // Update seats sold in events.json (if using Airtable, this is in Airtable)
      if (session.metadata.eventInstanceId) {
        await incrementSeatsSold(session.metadata.eventInstanceId);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (error) {
    console.error('Webhook error:', error);
    return {
      statusCode: 400,
      body: `Webhook Error: ${error.message}`,
    };
  }
};

async function recordAttendance(session) {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.log('Airtable not configured, skipping attendance tracking');
    return;
  }

  const { eventId, eventDate, eventInstanceId } = session.metadata;
  const email = session.customer_email || session.customer_details?.email;
  const name = session.customer_details?.name || '';

  const payload = {
    records: [{
      fields: {
        'Event ID': eventId || '',
        'Event Instance': eventInstanceId || '',
        'Event Date': eventDate || '',
        'Name': name,
        'Email': email || '',
        'Stripe Session ID': session.id,
        'Amount Paid': session.amount_total / 100,
        'Status': 'Registered',
        'Timestamp': new Date().toISOString(),
      }
    }]
  };

  try {
    const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error('Airtable error:', await res.text());
    } else {
      console.log('Attendance recorded in Airtable');
    }
  } catch (e) {
    console.error('Airtable request failed:', e);
  }
}

async function incrementSeatsSold(eventInstanceId) {
  // Note: For serverless functions, we can't easily update events.json
  // This is why Airtable is used for attendance tracking
  // You could also use a simple workaround:
  // - Store seat counts in Stripe metadata (update via Stripe API)
  // - Use a real database (Supabase, Fauna, etc.)
  // - Use Airtable as the source of truth for seat counts
  console.log(`Seat sold for instance: ${eventInstanceId}`);
}
