# BioLoop Climate Solutions (BioLoop) 🌱⚡
> **"Turning food waste into clean fuel and a cleaner future."**
> Single-Page Interactive Prototype Website for the College Business-Plan Finale — **ECOSPHERE 2026**

---

## 🚀 Quick Run Instructions

### 1. Run Development Server (Offline Ready)
```bash
# In the project root directory (d:/BIOLOOM):
npm run dev

# On Windows PowerShell:
npm.cmd run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser.

---

### 2. Build & Preview Production Bundle
```bash
# Build standalone static assets:
npm run build

# Preview offline static files:
npm run preview
```
All compiled static assets are located in [`dist/`](file:///d:/BIOLOOM/dist/index.html).

---

## 📝 Master Content File (`src/content.js`)

**ALL editable content lives in one place:**
👉 [`src/content.js`](file:///d:/BIOLOOM/src/content.js)

You can quickly modify:
1. **Founders ("Meet the team")**:
   - `Lissieux Abraham, [ROLE]`
   - `Lakshmi Narayanan, [ROLE]`
   - `Nandu Naidu, [ROLE]`
   - Subtitle: *"Team BioLoop, ECOSPHERE 2026"*
2. **Contact Details**:
   - Company: **BioLoop Climate Solutions**
   - Phone: **`9975869245`** (tap-to-call `tel:9975869245`)
   - Email: **`Contact@bioloop.com`** (`mailto:Contact@bioloop.com`)
3. **Chatbot Knowledge Base**: Add or refine keywords and answers in `CHATBOT_KNOWLEDGE_BASE`.
4. **Calculators & Stats**: Per 2.5 t/day plant baseline figures and 1 → 5 → 20 plant scaling roadmap.

---

## 🌟 Pitch Features & Section Breakdown

| Section | Key Content & Interactive Elements |
| :--- | :--- |
| **Hero** | • Tagline: *"Turning food waste into clean fuel and a cleaner future."*<br>• Word-by-word reveal headline, rising biogas bubbles, self-drawing loop SVG, mouse parallax.<br>• CTAs: *"See how it works"* & *"Ask BioLoop"*. |
| **1. About & Founders** | • **The Problem**: Food waste in dumps creating methane, odour & pollution while kitchens pay for disposal & LPG.<br>• **What Are We?**: Collects food waste separately, weighs it, digests it into biogas & slurry, records every batch for verified carbon credits.<br>• **Stat Strip** *(per 2.5 t/day plant estimates)*: 910 t waste/yr, 22.75 t LPG-eq/yr, ~91 t slurry/yr, ~523 t CO₂e gross reduction (~440 net credits/yr once verified).<br>• **Impact at Scale Visual**: 1 Plant (2.5 t/d, 910 t/yr) → 5 Plants (12.5 t/d, ~2,200 credits/yr) → 20 Plants (50 t/d, 18,200 t/yr, ~8,800 credits/yr) with **20x capacity growth** note.<br>• **Meet the Team**: Lissieux Abraham, Lakshmi Narayanan, Nandu Naidu. |
| **2. Products & Services** | • 4 Animated Cards: *Food-waste collection & weigh-in*, *Biogas (clean cooking fuel)*, *Organic fertiliser (slurry)*, *Carbon credits & impact reporting*.<br>• **Bioloop Impact Calculator**: Live slider (0.5 to 50 tonnes/day) computing waste diverted (t/d × 364), LPG-equivalent biogas (25 kg/t), slurry (~0.1 t/t), and carbon credits (~0.48/t). Dynamic loop graphic accelerates with slider. |
| **3. Customers & Industries** | • Primary Customers: *Canteens, Hostels, Small hotels*.<br>• Who else benefits: *Local communities, Farmers, Waste collectors*.<br>• **5 Impact Indicators We Track**: *Waste diverted, CO₂e avoided, Fossil fuel replaced, Partners onboarded, Organic fertiliser produced*. |
| **4. Ask BioLoop (Chatbot)** | • **100% Offline Rule-Based Assistant** with normalized fuzzy keyword matching.<br>• Clickable suggestion chips, message bubbles, typing dots animation (600–900ms), and fallback response with phone/email.<br>• *"Talk to the team"* button scrolling to Contact. |
| **5. Contact & Footer** | • BioLoop Climate Solutions, Phone: `9975869245` (`tel:`), Email: `Contact@bioloop.com` (`mailto:`).<br>• Contact form with animated celebratory confetti state.<br>• Footer with logo, tagline, quick links, and *"Prototype built for ECOSPHERE 2026"*. |

---

## 🔒 100% Offline Projector Guarantee
- Zero external API dependencies (no backend server required).
- No external CDN links (fonts and icons bundled locally with robust system fallbacks).
- Fast, 60fps animations that respect `prefers-reduced-motion`.

---
*Created for BioLoop Climate Solutions · ECOSPHERE 2026 College Business-Plan Finale*
