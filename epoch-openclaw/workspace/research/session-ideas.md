# Nerd 'n Sip — ESP32 Workshop Project Research
**Business concept:** Guided gadget-building workshops at bars (Paint & Sip style, but you build tech)
**Target audience:** Curious non-techies, 25–45, date night crowd, crypto/tech curious
**Constraints:** ~$15/kit, no soldering (Dupont connectors only), pre-flashed ESP32, ~90 min build time

---

## Project 1: ESP32 Weather Station 🌤️

### Concept Description
Participants assemble a personal weather station that pulls live data from the internet (OpenWeatherMap API) and/or reads local sensors. The OLED display shows current temperature, humidity, atmospheric pressure, and a small weather icon or forecast. Connects to bar's WiFi. Walk away with a gadget you actually plug in at home.

### Component List (Retail Pricing)

| Component | Source | Est. Price |
|-----------|--------|-----------|
| ESP32 DevKit v1 (pre-flashed) | AliExpress/Amazon | $3.50 |
| DHT22 Temp & Humidity sensor | AliExpress | $1.50 |
| BMP280 Pressure sensor (I2C) | AliExpress | $1.00 |
| 0.96" OLED display (I2C, 128×64) | AliExpress | $1.80 |
| Dupont jumper wires (10-pack, M-F) | AliExpress | $0.80 |
| Breadboard (mini, 170-tie) | AliExpress | $1.20 |
| USB-A to Micro-USB cable | AliExpress | $0.80 |
| USB 5V phone charger (shared/BYOD) | — | $0 |
| Small acrylic stand or printed frame | Local print | $1.50 |
| **Total** | | **~$12.10** |

> **Bulk note:** At 20+ kits ordered from AliExpress/LCSC, per-kit cost drops to ~$8–9, giving ~$6 margin on a $15 kit price.

### Tutorial / Example Project Links
- **Random Nerd Tutorials – ESP32 DHT22 Web Server:** https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-web-server-arduino-ide/
- **Random Nerd Tutorials – ESP32 OLED Display (SSD1306):** https://randomnerdtutorials.com/esp32-ssd1306-oled-display-arduino-ide/
- **Random Nerd Tutorials – ESP32 + BMP280:** https://randomnerdtutorials.com/esp32-bmp280-arduino-ide/
- **Instructables – ESP32 Weather Station with OLED:** https://www.instructables.com/ESP32-Weather-Station-With-OLED/
- **Hackaday.io – WiFi Weather Station ESP32:** https://hackaday.io/project/16045-esp32-weather-station
- **OpenWeatherMap free API** (used in firmware): https://openweathermap.org/api

### Feasibility Assessment
| Criterion | Assessment |
|-----------|-----------|
| **No soldering** | ✅ All components have Dupont-compatible headers or I2C breakout boards. Plug-and-play. |
| **Build time (90 min)** | ✅ ~15 min to orient the board, ~20 min to connect sensors (4–6 wires each), ~10 min to enter WiFi credentials via a captive portal or USB serial config tool, ~15 min for display testing + troubleshooting. Ample buffer. |
| **No coding** | ✅ Pre-flashed firmware reads sensors and hits OpenWeatherMap API automatically. Participants just wire it up and configure WiFi. |
| **Fail points** | ⚠️ WiFi config is the biggest friction point — consider a custom "Nerd 'n Sip Config" web page served by the ESP32 on first boot (captive portal). Bar WiFi stability is a concern; have a mobile hotspot as backup. |
| **Wow moment** | ✅ When the display lights up showing live weather — immediate payoff. |

**Overall feasibility: HIGH.** The most beginner-friendly of the three. Connections are intuitive (labeled VCC, GND, SDA, SCL), and the visual feedback is instant.

### Cool Factor / Nerd Appeal: ⭐⭐⭐⭐ (4/5)

**Why it's cool:**
- Takes a $3 chip and turns it into something you'd buy for $40 at Target
- "I built this" bragging rights are strong — it's a real, useful gadget
- The AI weather forecast angle (if firmware pulls OpenWeatherMap's forecast endpoint) makes it feel modern
- Pairs well with home decor — it looks good on a desk
- Gateway drug for IoT / home automation curiosity

**Why not 5/5:** It's the "safest" idea — feels slightly less flashy than AI or air quality. But it's the most likely to work flawlessly on the night, which matters.

---

## Project 2: ESP32 AI Chatbot 🤖

### Concept Description
Participants build a physical AI terminal: an ESP32 connected to a small TFT color display and a USB or wireless keyboard. The device connects to the bar's WiFi and hits the OpenAI ChatGPT API (or a local Ollama endpoint if you have a server on-site). Type a question, get a streamed AI response on screen. Optional twist: program a custom "persona" — e.g., "Bar Trivia Bot" or "Roast Bot" themed for the evening.

**Variant A (simpler):** ESP32 + TFT display + USB keyboard (OTG) — pre-configured with a fun persona, just plug in and chat.  
**Variant B (cooler):** ESP32 + 2.8" touchscreen TFT — on-screen keyboard, fully self-contained.

### Component List (Retail Pricing)

| Component | Source | Est. Price |
|-----------|--------|-----------|
| ESP32 DevKit v1 (pre-flashed) | AliExpress | $3.50 |
| 2.4" ILI9341 TFT SPI display (320×240) | AliExpress | $3.50 |
| Mini USB OTG keyboard (foldable) | AliExpress | $4.00 |
| Dupont jumper wires (10-pack, M-F) | AliExpress | $0.80 |
| USB-A to Micro-USB cable | AliExpress | $0.80 |
| Small 3D-printed or laser-cut enclosure | Local fab | $1.50 |
| **Total (Variant A)** | | **~$14.10** |

> **Alternative:** Use a TTGO T-Display ESP32 board (built-in 1.14" color LCD, ~$6) to eliminate the separate display wiring, reducing complexity and cost. Kit drops to ~$10.

### Tutorial / Example Project Links
- **ESP32 + ChatGPT API tutorial (Make:):** https://makezine.com/article/technology/esp32-chatgpt/
- **GitHub – esp32-chatgpt by dr-prodigy:** https://github.com/dr-prodigy/esp32-chatgpt (REST API call from ESP32 to OpenAI)
- **Instructables – ChatGPT on Arduino/ESP32:** https://www.instructables.com/ChatGPT-on-ESP32/
- **LilyGo TTGO T-Display as ChatGPT terminal:** https://github.com/Xinyuan-LilyGO/TTGO-T-Display
- **ESP32 LVGL touchscreen UI:** https://randomnerdtutorials.com/lvgl-esp32/
- **Ollama (local LLM option):** https://ollama.ai — run Llama 3 on a laptop at the bar, ESP32 calls local endpoint, no API key needed

### Feasibility Assessment
| Criterion | Assessment |
|-----------|-----------|
| **No soldering** | ✅ TFT displays come with header pins; SPI wiring is 6 wires. Dupont-friendly. |
| **Build time (90 min)** | ⚠️ Moderate risk. TFT SPI wiring (MOSI, MISO, SCK, CS, DC, RST) is 6 connections — manageable but more than I2C. Recommend color-coded wires in the kit. Budget 30 min for wiring, 20 min for WiFi config, 15 min for first chat session. |
| **No coding** | ✅ Firmware handles all API calls. Participants only need to enter WiFi credentials and optionally an OpenAI API key (or use the venue's shared key). |
| **Fail points** | ⚠️ API key management is a logistical challenge — consider providing a shared key with rate limits, or using a local Ollama server. TFT pin mapping mistakes are the most common wiring error. ⚠️ OpenAI API latency (1–5 sec) may feel slow vs. expectations. |
| **Wow moment** | ✅✅ Extremely strong — typing a question into a physical device you just built and getting an AI response is genuinely magical for non-techies. |

**Overall feasibility: MEDIUM-HIGH.** More wiring than the weather station but totally doable. The TTGO T-Display variant (built-in screen) dramatically simplifies assembly and is the recommended approach for a bar setting.

### Cool Factor / Nerd Appeal: ⭐⭐⭐⭐⭐ (5/5)

**Why it's cool:**
- AI is the hottest topic in tech right now — everyone has an opinion, most people haven't built anything with it
- "I made a physical ChatGPT terminal with my own hands" is an incredible conversation starter
- Custom personas ("Roast Bot," "Bar Trivia Master," "Wine Recommender") make it unique to the event
- Date night gold: couples can use it together, asking it increasingly weird questions
- Highly shareable on Instagram/TikTok — a glowing screen with AI text is visually compelling
- Feeds directly into crypto/tech-curious crowd's interest in AI agents and autonomous systems

**Why it's risky for the business:** API costs and internet dependency. Mitigate with Ollama on a local laptop.

---

## Project 3: ESP32 Air Quality Monitor 🌬️

### Concept Description
Participants build a personal air quality sensor that measures CO2 equivalent (eCO2), Total Volatile Organic Compounds (TVOC), and optionally PM2.5 particulate matter. Results display on an OLED or TFT with color-coded health indicators (green/yellow/red). Bonus: the firmware can log readings over time and show a mini trend graph. Contextually fun in a bar setting — watch the CO2 climb as more people pack in!

**Sensor options:**
- **SGP30** (I2C, eCO2 + TVOC) — ~$2.50, very simple 4-wire I2C connection
- **CCS811** (I2C, eCO2 + TVOC) — ~$3, slightly more accurate, same wiring
- **ENS160** (I2C, AMS, newer gen) — ~$3.50, best accuracy, same 4 wires
- **SDS011** (UART, PM2.5/PM10) — ~$8, but adds complexity and cost; skip for budget kits

**Recommended sensor for Nerd 'n Sip:** SGP30 + DHT22 (for temp/humidity compensation) — total sensor cost ~$4, same wiring complexity as weather station.

### Component List (Retail Pricing)

| Component | Source | Est. Price |
|-----------|--------|-----------|
| ESP32 DevKit v1 (pre-flashed) | AliExpress | $3.50 |
| SGP30 eCO2 + TVOC sensor (I2C) | AliExpress | $2.50 |
| DHT22 Temp & Humidity sensor | AliExpress | $1.50 |
| 0.96" OLED display (I2C, SSD1306) | AliExpress | $1.80 |
| Dupont jumper wires (10-pack, M-F) | AliExpress | $0.80 |
| Breadboard (mini, 170-tie) | AliExpress | $1.20 |
| USB-A to Micro-USB cable | AliExpress | $0.80 |
| Laser-cut acrylic case | Local fab | $1.50 |
| **Total** | | **~$13.60** |

> **Upgrade path:** Add an ENS160 ($3.50) instead of SGP30 for better accuracy, keeping kit under $15. Or add a small RGB LED ($0.30) for visual air quality alert — very satisfying "danger mode" effect.

### Tutorial / Example Project Links
- **Random Nerd Tutorials – ESP32 SGP30 Air Quality:** https://randomnerdtutorials.com/esp32-sgp30-air-quality-sensor-arduino/
- **Adafruit SGP30 Guide:** https://learn.adafruit.com/adafruit-sgp30-gas-tvoc-eco2-mox-sensor
- **Adafruit CCS811 Guide:** https://learn.adafruit.com/adafruit-ccs811-air-quality-sensor
- **Instructables – ESP32 Air Quality Monitor:** https://www.instructables.com/ESP32-Air-Quality-Monitor/
- **GitHub – ESP32 Air Quality with OLED:** https://github.com/G6EJD/ESP32-Air-Quality-Monitor
- **Hackaday – Building a CO2 monitor:** https://hackaday.com/2021/05/14/building-a-better-co2-monitor/
- **ENS160 + ESP32 tutorial:** https://how2electronics.com/ens160-air-quality-sensor-with-esp32/

### Feasibility Assessment
| Criterion | Assessment |
|-----------|-----------|
| **No soldering** | ✅ SGP30/CCS811/ENS160 all come on I2C breakout boards with 4-pin headers. Same 4-wire I2C connection as the OLED. |
| **Build time (90 min)** | ✅ Two I2C sensors + one OLED = about 12 wires total. Very manageable. 20 min wiring, 10 min WiFi, 60 min drinking and watching live readings. |
| **No coding** | ✅ Pre-flashed firmware reads sensors, displays values with health thresholds, and optionally publishes to a web dashboard. |
| **Fail points** | ⚠️ SGP30 requires a 15-minute warm-up period before accurate readings — plan this into the session. CCS811 can be finicky with power supply noise. ENS160 is most reliable but slightly pricier. ⚠️ Bar environment (smoke, perfume, alcohol vapor) will spike TVOC readings — frame this as a feature, not a bug! |
| **Wow moment** | ✅ Watching CO2 and TVOC climb in real time in a crowded bar is genuinely fascinating and sparks great conversation. |

**Overall feasibility: HIGH.** Similar complexity to the weather station. The I2C bus makes it simple — multiple sensors share the same 4 wires (with different addresses). Very teachable concept.

### Cool Factor / Nerd Appeal: ⭐⭐⭐⭐ (4/5)

**Why it's cool:**
- Highly relevant post-pandemic: everyone is newly aware of indoor air quality
- The bar environment is a live demo — participants see their own gadget react to the room in real time
- "Your gadget is telling you the air here is getting gross" is a funny, relatable moment
- Connects to health-tech and environmental awareness trends
- RGB LED alarm feature (air quality goes red) is a theatrical crowd-pleaser
- Shareable: "My homemade sensor says CO2 is 1800ppm in here 😂"

**Why not 5/5:** Less glamorous than AI, and the "what does eCO2 mean?" explanation adds some teaching overhead. But the contextual relevance in a crowded bar is unique and strong.

---

## Comparative Summary

| | Weather Station | AI Chatbot | Air Quality Monitor |
|---|---|---|---|
| **Cool Factor** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Build Feasibility** | High | Medium-High | High |
| **Kit Cost** | ~$12 | ~$14 | ~$14 |
| **Wiring Complexity** | Low (I2C) | Medium (SPI) | Low (I2C) |
| **Internet Required** | Yes (weather API) | Yes (AI API) | No (standalone) |
| **Fail Risk** | Low | Medium | Low |
| **Unique to Bar Context** | Low | Medium | HIGH |
| **Audience Appeal** | Broad | Tech-forward | Broad |
| **Shareable Moment** | Good | Excellent | Good |

## Recommendations

1. **Launch with Weather Station** — lowest risk, highest success rate, strong "I built this!" moment. Perfect for first events while you refine your facilitation.

2. **Feature AI Chatbot as flagship** — highest wow factor and shareability. Use a local Ollama server to eliminate API costs and internet dependency. This is your headline product once you've run a few events.

3. **Air Quality Monitor as seasonal / thematic special** — pitch it as "we're literally measuring how bad the air gets on a Saturday night." The live feedback in the bar environment is uniquely compelling and makes for great social content.

## Operational Notes

- **Pre-flashing:** Flash all ESP32s before the event. Use [esptool.py](https://github.com/espressif/esptool) or a dedicated flashing jig. Budget 2 min per board.
- **WiFi:** Pre-configure a dedicated event hotspot (or mobile hotspot) rather than relying on bar WiFi. Use a router with 20+ client capacity.
- **Dupont wires:** Color-code by function in the kit (red=VCC, black=GND, yellow=SDA, white=SCL, etc.). This alone cuts wiring errors by 80%.
- **Instruction cards:** Laminated step-by-step wiring diagrams, one per kit. Number the wires in the diagram to match numbered stickers on the wires.
- **Backup boards:** Bring 3–4 extra pre-flashed ESP32s and a spare of every sensor. Murphy's Law is real.
- **Sourcing:** AliExpress (3–4 week lead) or LCSC.com for bulk. Amazon for faster delivery at ~30% markup. For 20 kits/event, AliExpress bulk is worth the lead time.

---
*Research compiled for Nerd 'n Sip workshop planning — March 2026*
