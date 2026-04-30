# Nerd 'n Sip: Solar-Powered Solo Bitcoin Miner
## Slideshow Outline

**Session:** Session 1 — Solar Bitcoin Miner
**Runtime:** ~90 minutes
**Slide deck tone:** Fun, casual, visually rich. Think TED-lite meets craft night.

---

## Slide 1 — Welcome to Nerd 'n Sip 🍺⚡

**Title:** Welcome to Nerd 'n Sip
**Subtitle:** Like Paint & Sip, but you build stuff instead of painting stuff.

**Key Points:**
- Welcome everyone / housekeeping (bathrooms, drinks, pace)
- "You don't need to know anything about tech. That's literally the point."
- By the end of tonight, you'll have built a working gadget from scratch

**Visuals:**
- Logo lockup: Nerd 'n Sip branding
- Side-by-side: Paint & Sip canvas vs. a finished circuit gadget
- Photo of a fun group at a bar-style workshop

---

## Slide 2 — What Are We Making Tonight?

**Title:** Tonight's Project: Your Own Bitcoin Miner

**Key Points:**
- A real, functional Bitcoin mining device
- Powered by solar energy (or USB if the sun isn't cooperating)
- Shows live mining stats on a tiny display
- No coding. No soldering. No experience needed.
- You will take this home tonight.

**Visuals:**
- Photo or render of the finished device
- Callout labels pointing to: solar panel, OLED screen, battery, main board
- Highlight "YOURS TO KEEP" in a fun badge

---

## Slide 3 — Okay But What Even IS Bitcoin?

**Title:** Bitcoin in 60 Seconds (Seriously)

**Key Points:**
- Bitcoin is digital money that no bank controls
- Instead of a bank keeping records, thousands of computers do
- Those computers all share a public "ledger" (the blockchain) of every transaction ever
- It's like a Google Doc that everyone can read, nobody can delete, and no one company owns

**Visuals:**
- Simple diagram: Traditional bank (central server) vs. blockchain (network of nodes)
- Fun icon: A glowing spreadsheet floating in the sky
- Keep it clean — 3 icons max

---

## Slide 4 — So What Is Mining?

**Title:** Mining = Doing Math for Money

**Key Points:**
- To add a new "page" (block) to the ledger, someone has to solve a puzzle
- The puzzle is a math problem that takes a LOT of guessing
- First computer to guess right gets to add the block — and earns Bitcoin as a reward
- That's mining: your computer guessing numbers as fast as possible
- "It's basically a lottery where you buy tickets by doing math"

**Visuals:**
- Animated-style diagram: Computer guessing → ✓ Winner → 🏆 Bitcoin reward
- Fun lottery ticket metaphor illustration
- Optional: "Current Bitcoin reward: 3.125 BTC per block (~$200K+)"

---

## Slide 5 — Wait, Can This Little Thing Actually Mine Bitcoin?

**Title:** Technically Yes. Realistically… Also Yes, Just Slowly.

**Key Points:**
- Big mining farms use specialized chips (ASICs) worth thousands
- Our ESP32 is tiny — it mines at ~1 million guesses/second (vs. billions for industrial miners)
- The odds of winning a block are astronomically low… but not zero
- This is more like a fun science experiment than a get-rich plan
- Real value: understanding how it works by building it yourself
- Bonus: it's connected to a real mining pool, so every hash counts

**Visuals:**
- Size comparison: Industrial mining farm photo vs. our tiny device
- Infographic: "Your miner's hashrate vs. the network" (big vs. tiny bar)
- Funny caption: "David vs. Goliath, but Goliath has a data center"

---

## Slide 6 — What's In Your Kit?

**Title:** Meet Your Components

**Key Points (one per component):**
1. **ESP32** — The brain. A tiny Wi-Fi-enabled microcontroller. Pre-flashed, ready to go.
2. **18650 Battery** — A rechargeable lithium cell. Same type used in Tesla cars (just… fewer of them).
3. **TP4056 Charging Module** — Safely charges and protects the battery.
4. **Solar Cell** — Harvests light to charge the battery. Works indoors under bright light.
5. **OLED Display** — Tiny screen that shows your mining stats in real time.
6. **Dupont Cables** — Snap-together connectors. No soldering. Just plug in.
7. **Breadboard / Carrier Board** — Holds everything in place.

**Visuals:**
- Flat-lay photo of all components laid out and labeled
- Each component gets a name tag + 1-line description
- Fun framing: "Your ingredient list"

---

## Slide 7 — How It All Connects (The Big Picture)

**Title:** Here's How It Works Together

**Key Points:**
- Solar cell → charges battery via TP4056
- Battery → powers the ESP32
- ESP32 → connects to Wi-Fi → connects to a mining pool
- Mining pool → sends work → ESP32 guesses hashes → reports results
- OLED display → shows stats (hashrate, shares submitted, uptime)

**Visuals:**
- Clean flow diagram with icons for each component
- Arrows showing power flow (solar → battery → ESP32) and data flow (ESP32 → pool → OLED)
- Optional: animated version with pulsing arrows

---

## Slide 8 — Build Stage 1: Set Up the Power System

**Title:** Stage 1 — Let There Be Power (10 min)

**Key Points:**
- Connect the battery to the TP4056 charging module
- Connect the solar panel to the TP4056 input
- Check the indicator LEDs (red = charging, blue/green = full)
- Don't worry: the module protects against overcharging

**Visuals:**
- Step-by-step photo sequence: connectors being attached
- Highlighted wiring diagram (color-coded: red = positive, black = negative)
- "STOP" checkpoint icon — wait for facilitator confirmation before moving on

---

## Slide 9 — Build Stage 2: Wake Up the Brain

**Title:** Stage 2 — ESP32: Your Gadget's Brain (10 min)

**Key Points:**
- Connect the ESP32 to power output from the TP4056
- The ESP32 is pre-flashed — no programming needed
- You WILL need to enter your Wi-Fi credentials (facilitator has venue Wi-Fi details)
- A button on the board lets you cycle through setup mode

**Visuals:**
- Photo: ESP32 board with Dupont cables being attached
- Screenshot or mockup of the boot screen on OLED (scrolling text or splash screen)
- Wi-Fi setup step highlighted

---

## Slide 10 — Build Stage 3: Add the Display

**Title:** Stage 3 — Tiny Screen, Big Personality (10 min)

**Key Points:**
- The OLED connects via 4 wires (VCC, GND, SDA, SCL)
- Color coding makes it easy — match colors to labels
- Once connected and powered, the display will show mining stats automatically
- If you see a blank screen: check your connections (most common fix)

**Visuals:**
- Wiring diagram: 4 color-coded wires from OLED to ESP32
- Photo: OLED showing live stats (hashrate, shares, pool connection)
- Callout: "SDA = Data, SCL = Clock — fancy words for 'talking wires'"

---

## Slide 11 — Build Stage 4: Solar Panel + Final Assembly

**Title:** Stage 4 — Soak Up the Sun (10 min)

**Key Points:**
- Connect solar panel leads to the TP4056 input (already done if you're ahead)
- Position the panel for best light exposure
- Optional: fold the carrier board into its case/stand
- Do a final check: all connectors seated, no loose wires

**Visuals:**
- Photo of assembled device with solar panel extended
- Checklist graphic: Power ✓ | Brain ✓ | Display ✓ | Solar ✓
- "You're basically done" in big friendly text

---

## Slide 12 — Power It Up!

**Title:** The Moment of Truth 🚀

**Key Points:**
- Hold the power button for 2 seconds
- Watch the OLED boot sequence
- Connect to the mining pool (takes ~30 seconds on first run)
- You should see: hashrate, shares submitted, pool status
- If nothing happens — check the troubleshooting slide (it's usually one loose wire)

**Visuals:**
- Photo/video of OLED coming to life
- Annotation: What each stat means on the display
- Confetti / celebration graphic

---

## Slide 13 — Troubleshooting Guide

**Title:** Something Weird? Here's Your Fix.

**Key Points (as a quick-reference table):**

| Symptom | Likely Cause | Fix |
|---|---|---|
| Nothing powers on | Battery not connected / dead | Check TP4056 LED; try USB power |
| OLED is blank | Loose wire on SDA/SCL | Reseat display cables |
| "Connecting…" stuck on screen | Wrong Wi-Fi password | Re-enter credentials; check network |
| Hashrate shows 0 | Not connected to pool yet | Wait 60 sec; check Wi-Fi |
| Display shows garbage | Wrong I2C address | Facilitator can fix in 30 sec |
| Solar panel not charging | Insufficient light | Move closer to light source or use USB |

**Visuals:**
- Clean table layout with color-coded severity (yellow = easy fix, red = ask Josh)
- Icon of Josh (stick figure with wrench) for "ask Josh" items
- Keep it calm and friendly: "Most issues are one loose wire."

---

## Slide 14 — You Built That 🎉

**Title:** Show & Tell Time

**Key Points:**
- Hold up your miner! Let's see them.
- Share your hashrate — who's the fastest?
- Your device will keep mining as long as it has power/Wi-Fi
- Take it home — set it in a sunny window and let it run
- The OLED updates in real time; check it tomorrow morning

**Visuals:**
- Group photo moment placeholder
- Leaderboard-style graphic: "Tonight's Hashrates"
- Fun stat: "Combined, you're all mining at roughly [X] H/s tonight"

---

## Slide 15 — What Comes Next

**Title:** Keep Nerding. Keep Sipping.

**Key Points:**
- Next Nerd 'n Sip session: [Date TBD] — topic TBD
- Join the group chat / Discord / mailing list for updates
- Want to go deeper? Resources for learning more about ESP32, Bitcoin, and hardware hacking
- Tag us if you post your miner: **#NerdnSip**

**Recommended Resources:**
- Bitcoin.org — beginner guides
- Espressif.com — ESP32 docs (for the curious)
- r/BitcoinMining — community
- BTCsessions on YouTube — excellent Bitcoin explainers

**Visuals:**
- Nerd 'n Sip logo / next event card
- QR code linking to mailing list or Discord
- Photo collage of tonight's builds

---

## Slide 16 — Thank You + Drink Up

**Title:** Thanks for Being Here 🍻

**Key Points:**
- You built something real tonight. That's not nothing.
- Questions? Josh is around. Also the bar is still open.
- Please fill out feedback form (QR code)
- Tip your bartender, tell your friends

**Visuals:**
- Fun "achievement unlocked" graphic: "Bitcoin Miner Builder"
- QR code for feedback form
- Nerd 'n Sip logo / social handles

---

*Slide deck should be built in Google Slides or Canva. Suggested color palette: dark background (#1a1a2e), neon accent (#e94560 or #00d4ff), white text. Vibes: hacker-chic meets craft night.*
