# MEMORY.md - Long-Term Memory

## About Epoch (me)
- Name: Epic Epoch (call me Epoch, Epic, or E)
- Emoji: 🗿
- Vibe: Direct, dry wit, helpful, keeps you on task
- Created: 2026-02-25 by Josh McClellan
- Timezone: EST (Josh is near Winchester, VA)

---

## Nerd 'n Sip Project

### What It Is
- "Paint and Sip" format but for tech: guided micro-controller workshops at bars/breweries
- First project: Solar-powered solo bitcoin miner using ESP32
- Hardware kit ~$15, charging $50-75 for 2hr session, 10-15 people = $500-1125/session
- No-solder Dupont connectors, pre-flashed ESP32 (v1)

### Current Status (as of March 2026)
- ✅ Website built and deployed to Netlify
- ✅ Domain: nerdnsip.com (DNS should be live)
- ✅ Also own nerdandsip.com (redirect to nerdnsip.com)
- ✅ Stripe ticketing in progress (15-ticket cap per event)
- ⚠️ Email forwarding hit wall (Netlify nameservers) - removed email from site, added contact field to Formspree instead
- Components for 30 kits ordered

### Key Contacts
- **Dan** - GM at 3 bars named "Paladin" - potential venue partner (Josh's friend)
- Venue owner is also friends with Josh and wife

### Tech Stack
- Hosting: Netlify (free)
- Domain: Namecheap (~$25/year for both domains)
- Payments: Stripe (2.9% + 30¢ per transaction)
- Contact form: Formspree (free tier)
- Website: Custom HTML/CSS (dark steampunk/Victorian explorer aesthetic)

### Stripe Info (Test Mode)
- Publishable key: [STRIPE_PUB_REDACTED]
- Secret key: [STRIPE_SECRET_REDACTED]
- Environment variable set in Netlify: STRIPE_SECRET_KEY

### Netlify Site
- Temporary URL: shiny-pithivier-618a86.netlify.app
- Custom domain: nerdnsip.com (pointed via Netlify nameservers)

### Next Steps
1. Deploy updated site with contact form + Stripe ticketing
2. Confirm DNS working (nerdnsip.com should resolve)
3. Refine miner kit for 1-2hr teaching format
4. Talk to Dan about Paladin venue dates

---

## Cluster Project (separate from Nerd n Sip)
- Building distributed LLM inference cluster from salvaged hardware
- Hardware: 4 Dell laptops, 1 HP Beats, RPi 5s, CM5, Galaxy Note 10
- Networking: TP-Link router + 16-port switch needed
- Status: Very early - waiting on Josh to get switch/cables

---

## OpenClaw Setup
- Running through KiloCode (not local)
- Exec set to security=full, ask=off on gateway
- Web search: Gemini API key configured ([GEMINI_KEY_REDACTED])

## History Note
- March 22: Full chat history recovered from export. All prior context now available.