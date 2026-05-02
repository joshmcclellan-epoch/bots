// Calendar Widget for Nerd 'n Sip
// Loads events from events.json and renders an interactive calendar

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let eventsData = null;

// Load events data
async function loadEvents() {
  try {
    const res = await fetch('/events.json');
    eventsData = await res.json();
    renderCalendar(currentYear, currentMonth);
  } catch (e) {
    console.error('Failed to load events:', e);
  }
}

// Get all event dates for a given month
function getEventsForMonth(year, month) {
  if (!eventsData) return [];
  const events = [];
  eventsData.sessions.forEach(session => {
    session.events.forEach(ev => {
      const d = new Date(ev.date);
      if (d.getFullYear() === year && d.getMonth() === month) {
        events.push({ ...ev, sessionName: session.name, sessionId: session.id, price: session.price, maxSeats: session.maxSeats });
      }
    });
  });
  return events;
}

// Render calendar
function renderCalendar(year, month) {
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get events for this month
  const monthEvents = getEventsForMonth(year, month);

  // Build calendar HTML
  let html = `<div class="calendar-header">
    <button class="cal-nav" onclick="prevMonth()">‹</button>
    <h3 class="cal-month">${monthNames[month]} ${year}</h3>
    <button class="cal-nav" onclick="nextMonth()">›</button>
  </div>
  <div class="calendar-weekdays">
    ${dayNames.map(d => `<div class="cal-weekday">${d}</div>`).join('')}
  </div>
  <div class="calendar-grid">`;

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-day empty"></div>`;
  }

  // Day cells
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const dayEvents = monthEvents.filter(e => e.date === dateStr);
    const hasEvents = dayEvents.length > 0;
    const isPast = new Date(dateStr) < new Date().setHours(0,0,0,0);

    html += `<div class="cal-day${hasEvents ? ' has-events' : ''}${isPast ? ' past' : ''}" onclick="showDayEvents('${dateStr}')">
      <span class="cal-day-number">${day}</span>`;
    if (hasEvents) {
      html += `<div class="cal-event-dots">${dayEvents.map(() => '<span class="event-dot"></span>').join('')}</div>`;
    }
    html += `</div>`;
  }

  html += `</div>`;

  // Day detail panel (initially hidden)
  html += `<div class="day-detail" id="dayDetail" style="display:none;">
    <h4 id="detailDate"></h4>
    <div id="detailEvents"></div>
  </div>`;

  document.getElementById('calendarWidget').innerHTML = html;
}

// Navigation
function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderCalendar(currentYear, currentMonth);
  document.getElementById('dayDetail').style.display = 'none';
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  renderCalendar(currentYear, currentMonth);
  document.getElementById('dayDetail').style.display = 'none';
}

// Show events for a specific day
function showDayEvents(dateStr) {
  if (!eventsData) return;
  const dayEvents = [];
  eventsData.sessions.forEach(session => {
    session.events.forEach(ev => {
      if (ev.date === dateStr) {
        dayEvents.push({ ...ev, sessionName: session.name, sessionId: session.id, price: session.price, maxSeats: session.maxSeats, description: session.description, includes: session.includes, duration: session.duration });
      }
    });
  });

  const dateObj = new Date(dateStr);
  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('detailDate').textContent = `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;

  let evHtml = '';
  if (dayEvents.length === 0) {
    evHtml = '<p class="no-events">No sessions scheduled for this day.</p>';
  } else {
    dayEvents.forEach(ev => {
      const seatsLeft = ev.maxSeats - ev.seatsSold;
      evHtml += `<div class="day-event-card">
        <h5>${ev.sessionName}</h5>
        <p class="event-time">🕐 ${ev.time}</p>
        <p class="event-venue">📍 ${ev.venue}</p>
        <p class="event-price">💵 $${ev.price}/person</p>
        <p class="event-seats">👥 ${seatsLeft} of ${ev.maxSeats} seats left</p>
        <button class="btn-primary btn-sm" onclick="buyTicket('${ev.sessionId}', '${ev.sessionName}', '${ev.date}', ${ev.price}, '${ev.id}')">Get Tickets</button>
      </div>`;
    });
  }

  document.getElementById('detailEvents').innerHTML = evHtml;
  document.getElementById('dayDetail').style.display = 'block';
}

// Updated buyTicket to include eventInstanceId
async function buyTicket(eventId, eventName, eventDate, price, eventInstanceId) {
  const btn = event.target;
  if (btn) { btn.textContent = 'Loading...'; btn.disabled = true; }

  try {
    const res = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId, eventName, eventDate, price, eventInstanceId })
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  } catch (e) {
    if (btn) { btn.textContent = 'Get Tickets'; btn.disabled = false; }
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', loadEvents);
