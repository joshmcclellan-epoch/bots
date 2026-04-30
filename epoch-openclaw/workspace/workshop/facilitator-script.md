# Nerd 'n Sip — Session 1: Solar Bitcoin Miner
## Facilitator Script for Josh

**Total runtime:** ~90 minutes
**Group size:** Up to 15
**Tone:** Knowledgeable friend. Dry wit. Not a lecture. You're the cool person explaining something cool.

---

> **BEFORE YOU START — Setup Checklist:**
> - [ ] Kits at every seat (component bag + carrier board)
> - [ ] Slides loaded and on the big screen (or TV)
> - [ ] Wi-Fi name and password written on whiteboard / printed card at each seat
> - [ ] Your phone or laptop ready to demonstrate OLED boot sequence if needed
> - [ ] Spare Dupont cables and one fully-assembled demo unit on hand
> - [ ] Drinks flowing. This matters.

---

## SECTION 1: Welcome & Intro
### ⏱ 0:00–0:10 (10 minutes)
### 📊 Slides: 1–2

---

*[Stand somewhere visible. Wait for the room to settle. Don't rush this — let people get their drinks. If someone's still at the bar, that's fine.]*

---

**JOSH:**
"Alright, welcome everyone — I'm Josh, and tonight we're going to do something a little different than your average Tuesday.

By the time you leave here, you will have built a functional Bitcoin mining computer. From scratch. Out of a bag of parts.

*[pause for effect]*

Now — before anyone panic-Googles 'how much does Bitcoin mining pay' — I want to set expectations: you're not going to retire off this thing. But it IS real, it IS working, and it IS yours to take home. And you'll understand how it works, which is more than most people can say.

This is Nerd 'n Sip. Like Paint & Sip, except instead of a canvas you get a circuit, and instead of wine-stained aprons you get… probably the same thing actually. Don't spill on the components."

*[Beat. Light laugh.]*

"Quick housekeeping: bathrooms are [LOCATION]. We're going to go for about 90 minutes. The bar stays open the whole time — drinks are encouraged, just maybe don't knock them onto your electronics. And if you get lost or confused at any point, raise your hand. There are no dumb questions. The only dumb question is the one you don't ask and then you plug something in wrong.

Okay. Let's do this."

---

> **📊 Advance to Slide 2: "What Are We Making Tonight?"**

---

"So here's what you're building tonight."

*[Gesture at slide showing finished device.]*

"This is a solar-powered Bitcoin miner. It's got a small computer brain called an ESP32 — pre-programmed, nothing for you to code — a rechargeable battery, a solar cell so it can run off sunlight, and this little OLED screen that shows you mining stats in real time.

No soldering. No coding. Everything snaps together with these little color-coded connectors. By the end of the night, you'll plug it in, watch it boot up, and it'll connect to a real Bitcoin mining pool and start working.

You keep it. Take it home. Put it in a sunny window. Let it run."

---

## SECTION 2: Bitcoin Explainer
### ⏱ 0:10–0:20 (10 minutes)
### 📊 Slides: 3–5

---

> **📊 Advance to Slide 3: "Okay But What Even IS Bitcoin?"**

---

"Before we touch any hardware, I'm going to give you the world's fastest Bitcoin explainer. I promise it won't be boring. Or at least I'll try.

Most of you have probably heard of Bitcoin. Some of you probably own some. Maybe some of you are here because your partner dragged you and you're not sure why. That's fine. All of you are welcome.

So: what IS Bitcoin?

It's digital money. But unlike dollars, which are managed by banks and governments, Bitcoin is managed by math and a global network of computers. No central authority. No Federal Reserve. Just software.

The way it works is: every transaction ever made in Bitcoin is recorded on a shared list called the blockchain. Think of it like a Google Doc that the whole world can read, nobody can edit, and no one company owns. Every time money moves, it gets added to this list. Permanently.

So instead of trusting a bank to keep your records honest, you trust math. Which — depending on your feelings about banks — might actually be more reassuring."

*[Wait a beat.]*

---

> **📊 Advance to Slide 4: "So What Is Mining?"**

---

"Okay so that brings us to mining. What is mining?

To add a new page to that global ledger, someone has to earn the right to do it. And the way you earn that right is by solving a math puzzle. Specifically: a guessing game.

The network poses a question that has no shortcut — you can't work backwards, you can't be clever. You just have to guess a number, check if it's right, and if it's not, guess again. Billions of times per second.

The first computer to guess correctly gets to write the next block of transactions — and as a reward, it receives some Bitcoin. That's the mining reward.

It's essentially a lottery where the tickets are math problems and the prize is digital gold. The more guessing power you have, the more lottery tickets you hold.

That's it. That's mining."

*[Pause. Let it land.]*

---

> **📊 Advance to Slide 5: "Wait, Can This Little Thing Actually Mine Bitcoin?"**

---

"Now. I know what you're thinking. 'Josh, this thing is the size of a deck of cards. How is it going to compete with warehouses full of specialized mining computers?'

Short answer: it's not. At least not directly.

Our ESP32 does about one million hash attempts per second. Industrial miners do many billions. The entire Bitcoin network combined does something like 500 quintillion. So our slice of the pie is… small.

*[Pause.]*

But here's the thing: we're connected to what's called a mining pool. It's like a lottery syndicate. We combine our hashing power with thousands of other small miners, and when the pool wins a block, the reward gets split proportionally. So every single hash our little guy generates is contributing to a real pool, earning real fractions of Bitcoin.

Is it going to make you rich? No. Is it a real, functioning piece of the Bitcoin network? Absolutely yes.

The main value tonight is understanding how this works — by actually building the thing. That's worth more than any fraction of a coin."

---

> **💬 COMMON QUESTION: "So how much will it actually earn?"**
> **ANSWER:** "Over time, running on solar, you might accumulate tiny fractions — we're talking satoshis, which are like cents of Bitcoin. The pool will have a minimum payout threshold. It's more of a 'proof of concept you can hold in your hand' than a retirement plan. But hey, a penny a day for free? Some people think that's worth something."

---

## SECTION 3: Component Overview
### ⏱ 0:20–0:30 (10 minutes)
### 📊 Slide: 6–7

---

> **📊 Advance to Slide 6: "Meet Your Components"**

---

"Alright — open your kits. Go ahead and dump everything out. Don't lose anything, but let's get eyes on what we're working with."

*[Give people 30 seconds to open bags and look around.]*

"Let me walk you through what's in front of you.

This—" *[hold up ESP32]* "—is the ESP32. It's a microcontroller. Basically a tiny computer with Wi-Fi built in. It's about the size of a stick of gum and it already has all the Bitcoin mining software loaded on it. You don't need to program it. You don't need to touch code. It's ready to go.

Fun fact: the chip inside this thing has more computing power than the computers that sent Apollo 11 to the moon. Which is a sentence that should make all of us feel a little weird."

*[Pick up the battery.]*

"This is an 18650 lithium battery. It's a rechargeable cell — the same type used in Tesla cars, just… fewer of them. Treat it with basic respect: don't puncture it, don't throw it at your date. It's perfectly safe if you handle it normally, which I trust you all to do.

This little orange board—" *[hold up TP4056]* "—is the charging module. It sits between the solar panel and the battery. It handles charging safely and protects the battery from overcharging. You don't need to configure it. It just works.

The solar cell — this one—" *[hold up panel]* "—converts light to electricity. It'll charge the battery in direct sunlight, or slowly under bright indoor light. It's not going to run a Tesla, but it'll keep our little miner happy.

This—" *[hold up OLED]* "—is the OLED display. It's tiny, it's cool, and it'll show you your mining stats in real time once we get everything hooked up. Hashrate, shares submitted, pool connection status — all on this little screen.

And finally, these—" *[hold up Dupont cables]* "—are your connectors. Dupont cables. They snap onto the pins of each component. No soldering. If you can plug in a USB cable, you can do this. The color coding tells you what goes where."

---

> **📊 Advance to Slide 7: "Here's How It Works Together"**

---

"Before we start building, let me show you the big picture of how all this fits together, so when you're plugging things in, you understand why.

Power flows like this: sunlight hits the solar panel, which generates electricity, which flows into the TP4056 charging module, which charges the battery. The battery then powers the ESP32.

Data flows like this: the ESP32 connects to your Wi-Fi, which connects it to the mining pool server. The pool sends the ESP32 a puzzle. The ESP32 guesses as fast as it can. When it finds a valid answer — or just periodically — it reports back to the pool. Meanwhile, it's sending stats to the OLED display so you can see what it's doing.

That's the whole system. Solar powers it. The brain does the mining. The screen shows the receipts. Let's build it."

---

## SECTION 4: Build Stages
### ⏱ 0:30–1:10 (40 minutes)
### 📊 Slides: 8–12

---

> **📊 Advance to Slide 8: "Stage 1 — Let There Be Power"**

---

### STAGE 1: Power System (~10 min)

*[Walk to a table and demonstrate while explaining. Keep it slow and visible.]*

"Stage one: power. We're going to connect the battery to the TP4056 charging module.

Take the TP4056 board — the small orange one. Look at it. You'll see labels on the pads or pins. Two of them say B+ and B-. Those connect to the battery. The other two — IN+ and IN- — are where the solar panel connects.

Look at your battery wires. Red is positive, black is negative. Always. Red goes to B+, black goes to B-. If you mix these up, nothing exciting happens — the module is protected — but it also won't work, so let's get it right.

Go ahead and connect your battery to the TP4056 now. The connectors should snap in. You'll feel a little click."

*[Walk around. Help anyone who looks confused. Give everyone 2-3 minutes.]*

"Once that's connected, watch the LED on the TP4056. If the battery needs charging, you'll see a red light. If it's already full, you might see blue or green depending on the module. Either is fine.

Then go ahead and connect the solar panel wires to IN+ and IN-. Same rule: red to positive, black to negative.

*[Checkpoint]* 

Before we move on — everybody got a light on their TP4056? Raise your hand if you're not seeing any light.

*[Address any raised hands. Common issues: battery connector not fully seated, reversed polarity.]*

Great. Stage one done. You have a working solar charging system."

---

> **📊 Advance to Slide 9: "Stage 2 — Wake Up the Brain"**

---

### STAGE 2: ESP32 Power + Wi-Fi (~10 min)

"Stage two: powering up the ESP32 and getting it online.

The TP4056 has output pins — labeled OUT+ and OUT-. These are what feed power to the ESP32. We're going to run two wires: OUT+ to the VIN pin on the ESP32, and OUT- to a GND pin.

Find the ESP32. Look at the pin labels along the sides. You're looking for VIN and GND. They should be labeled — if the printing is too small, the diagram on your cheat sheet shows the pin layout.

Connect those two wires now."

*[Circulate. This step trips people up most often — wrong pin selection.]*

> **💡 TIP:** If someone picks the wrong GND pin, it's fine — there are usually multiple GND pins and they're all equivalent. VIN is specific though.

"Now here's the fun part. Your ESP32 is pre-flashed with mining software, but it doesn't know your Wi-Fi credentials yet. When it boots up for the first time, it's going to broadcast its own Wi-Fi network — you'll see it on your phone as something like 'ESP32-Miner-Setup' or similar.

You connect to that network from your phone, it opens a little config page, and you enter the venue Wi-Fi name and password. The Wi-Fi name and password are on the card in front of you — or on the whiteboard.

We'll actually do this step in a minute when everything's assembled and we power it on. For now, just get those two wires connected."

*[Pause for assembly. Check in.]*

---

> **📊 Advance to Slide 10: "Stage 3 — Add the Display"**

---

### STAGE 3: OLED Display (~10 min)

"Stage three is the fun one — connecting the display.

The OLED uses four wires. That's it. Four. They are:
- **VCC** — power (red wire, goes to 3.3V on the ESP32)
- **GND** — ground (black wire, goes to any GND)
- **SDA** — data line (usually a blue or white wire)
- **SCL** — clock line (usually a yellow or green wire)

On your ESP32, look for the labeled pins. SDA and SCL are usually called out — on most ESP32 boards, SDA is GPIO21 and SCL is GPIO22, but your board might have them labeled directly.

Your cheat sheet has a wiring diagram. Match the colors on your cables to the labels.

SDA stands for 'Serial Data' and SCL stands for 'Serial Clock.' You don't need to remember that. All it means is: one wire sends data, one wire keeps them in sync. Fancy words for 'talking wires.'"

*[Allow 3-4 minutes to connect.]*

"Once you've got all four wires in, give them a gentle tug — not hard, just enough to confirm they're seated. Loose connections are the number one cause of a blank screen, and we'll save ourselves a lot of confusion if we check now."

> **💡 COMMON ISSUE:** Blank OLED after power-on → 90% of the time it's a loose SDA or SCL wire. Second most common: VCC on 5V instead of 3.3V (check the pin label).

---

> **📊 Advance to Slide 11: "Stage 4 — Solar Panel + Final Assembly"**

---

### STAGE 4: Final Assembly (~10 min)

"Almost there. If you haven't connected the solar panel yet, do that now — IN+ and IN- on the TP4056.

Now let's do a pre-flight check before we power on.

Run through this with me:
- Battery connected to TP4056 B+ and B-? ✓
- Solar panel connected to TP4056 IN+ and IN-? ✓
- ESP32 power wires from TP4056 OUT+ and OUT- to VIN and GND? ✓
- OLED connected with all four wires — VCC, GND, SDA, SCL? ✓
- Any wires that look obviously loose or unplugged? Give everything one last press.

If you want to tuck the wires in and mount the board to the carrier, go for it. Otherwise we're ready for the moment of truth."

---

> **📊 Advance to Slide 12: "The Moment of Truth"**

---

### POWER ON

*[Pause. Build anticipation slightly.]*

"Alright. Hold down the power button on your TP4056 or carrier board — two seconds. Or if there's no physical button, the device will power on automatically when connected.

Watch your OLED."

*[Give it a moment.]*

"You should see a boot screen — maybe some scrolling text, maybe a Nerd 'n Sip logo, then it'll go into setup mode.

If your screen lit up — congratulations. You built a computer. It's working.

Now — pull out your phone. Look for a Wi-Fi network called something like 'BitMiner-Setup' or 'ESP32-Config'. Connect to it. Your phone might say 'no internet' — that's fine, stay connected anyway. A setup page should pop up. If it doesn't, open a browser and go to 192.168.4.1.

Enter the venue Wi-Fi name and password — it's on your card. Hit save. The ESP32 will restart and connect."

*[Walk around. Some people will need help with the captive portal. This is normal.]*

*[After ~2-3 minutes:]*

"Once it connects to Wi-Fi, it'll connect to the mining pool. This takes about 30 to 60 seconds. Then your OLED will switch to the stats screen — you'll see your hashrate, how many shares you've submitted, and the pool connection status.

If you see numbers, you're mining Bitcoin. Right now. In a bar. With a thing you built."

*[Let that land.]*

---

> **💬 COMMON QUESTION: "My screen says 'Connecting...' and it's been a minute."**
> **ANSWER:** "Two possibilities. One: the Wi-Fi password was entered wrong — double-check it and redo the setup. Two: the pool server took a moment to respond. Give it another 30 seconds. If it's been 2 minutes, come see me."

> **💬 COMMON QUESTION: "My hashrate shows 0."**
> **ANSWER:** "It's still connecting to the pool. Give it 60 seconds after you see 'Connected.' If it stays at 0 after that, I'll take a look."

---

## SECTION 5: Troubleshooting Walkthrough
### ⏱ 1:10–1:20 (10 minutes — overlap with build if needed)
### 📊 Slide: 13

---

> **📊 Advance to Slide 13: "Troubleshooting Guide"**

*[Only spend dedicated time here if there are stragglers or common issues. Otherwise keep it brief.]*

---

"While some of you are finishing up, let me run through the quick-hit troubleshooting guide — this is also on your cheat sheet.

**Nothing powers on:** Check that the battery is seated properly. Try connecting via USB if you have a cable. Check the TP4056 LED — is it lit at all?

**Blank OLED:** Ninety-nine times out of a hundred: loose SDA or SCL wire. Pop them out and reseat them.

**Stuck on 'Connecting...':** Wrong Wi-Fi password. Redo the setup captive portal.

**Hashrate is 0:** Just wait — it takes a minute after connecting to Wi-Fi. If it's been 2+ minutes and still 0, something's wrong with the pool connection. Come find me.

**Display shows garbage characters:** I2C address mismatch. This is a 30-second fix I can do for you — just wave me over.

**Solar panel not charging:** Under indoor lighting it'll charge slowly. Move it closer to a lamp or bright light source, or just let the USB power keep it running. Outside in sunlight it'll charge fine.

Most problems are a loose wire or a wrong Wi-Fi password. Genuinely, that's it 80% of the time."

---

> **🔧 JOSH'S TOOLKIT — Keep these handy:**
> - Spare Dupont cables (M-F, M-M, F-F assortment)
> - One pre-assembled working demo unit
> - A USB cable and power bank for bypassing battery issues
> - Your phone to demonstrate the Wi-Fi setup captive portal
> - Small flathead for reseating stubborn connectors

---

## SECTION 6: Show & Tell + Wrap-Up
### ⏱ 1:20–1:30 (10 minutes)
### 📊 Slides: 14–16

---

> **📊 Advance to Slide 14: "Show & Tell Time"**

---

"Okay — everyone who's got a live mining display, hold it up."

*[Look around. Celebrate the ones that are working. Cheer.]*

"Beautiful. Look at that. Fifteen — or however many of you — are now Bitcoin miners. That is genuinely cool.

Let me see some hashrates. Shout out your number if your display is showing it."

*[Have someone note them down or do a quick leaderboard if the vibe supports it.]*

"Combined, you're all contributing roughly [add up estimates] hashes per second to the pool tonight. That's not a huge number in the grand scheme of the Bitcoin network — but it's real. Those hashes are being received by a real server and counted.

Your device will keep running as long as it has power. When you get home, put it in a sunny window tomorrow morning. The solar panel will kick in, charge the battery, and it'll run all day without you doing anything. Check back in a week and see how many shares you've submitted."

---

> **📊 Advance to Slide 15: "Keep Nerding. Keep Sipping."**

---

"Our next Nerd 'n Sip session is [DATE TBD] — I'm not going to spoil the project yet, but it involves [TEASE]. Stay tuned.

If you want to stay in the loop, there's a QR code on the screen and on your card. Sign up for the mailing list or join the Discord. That's where I post session dates, answer questions, and occasionally share cool hardware stuff.

If you want to go deeper on any of this — Bitcoin, the ESP32, electronics generally — I've listed some good starting points on this slide. BTCsessions on YouTube for Bitcoin, Espressif's docs for the ESP32. Both are way more approachable than they sound.

Tag us on social if you post your miner: **#NerdnSip**. I want to see these things in the wild."

---

> **📊 Advance to Slide 16: "Thanks for Being Here"**

---

"That's it. You built a real thing tonight. You understand something — Bitcoin mining, how electronics connect, how solar power works — that you didn't understand when you walked in. That's worth something.

I'm going to stick around for a bit if anyone has questions. The bar's still open. There's a feedback QR code on screen — takes two minutes and genuinely helps me make the next session better.

Thank you. Tip your bartender. See you next time."

*[Step back. Let the room decompress naturally. Drink your drink.]*

---

## APPENDIX: Common Questions & Answers

**"Is this legal?"**
Absolutely. Bitcoin mining is legal in the US and most countries. You're just running software on hardware you own.

**"What pool are we connected to?"**
[Insert your chosen pool — Braiins, public-pool.io, or similar. Solo pools also work.] You can switch pools later by going back into the setup interface.

**"Can I change what the display shows?"**
The firmware supports a few display modes you can cycle through with the button. For deeper customization, yes, but that requires flashing new firmware — happy to talk through it after.

**"What happens if I lose Wi-Fi?"**
It retries every 60 seconds. As long as Wi-Fi comes back, it'll reconnect automatically. No data is lost.

**"Can I use it with a different Wi-Fi at home?"**
Yes. Hold the setup button for 5 seconds to re-enter setup mode. Connect to the ESP32's own network again and enter your home credentials.

**"The solar panel doesn't seem to do anything."**
Under dim indoor light, charging is slow but real. In direct sunlight you'll see the TP4056 LED turn on. Move it to a brighter spot to demo.

**"My partner is way further ahead than me and I feel dumb."**
That's just because they didn't get up to get drinks yet. You're fine. Hardware is weird — sometimes things just click in on the first try and sometimes they don't. It's not a measure of anything.

---

*Document version 1.0 — Nerd 'n Sip Session 1*
*Keep this printed as a backup. Tech has a way of failing exactly when you need it.*
