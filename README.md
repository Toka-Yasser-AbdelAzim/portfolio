# Toka Yasser — Junior UI/UX Designer Portfolio

A personal, production-ready portfolio website for **Toka Yasser**, Junior UI/UX Designer based in Cairo, Egypt. Built with pure semantic HTML5, modern vanilla CSS3 (design tokens, dark/light themes, responsive grid systems), and accessible vanilla JavaScript.

---

## 📌 Portfolio Overview & Positioning Strategy

This portfolio is strictly grounded in Toka Yasser's verified academic and training background:
- **Bachelor's Degree in Computer Science — Thebes Academy (2021–2025)** | **Grade: Excellent**
- **UI/UX Design Diploma — Route Academy (Oct 2025 – Jan 2026)**
- **Technology Training Program — iCareer Digitera (Sept 2026 – Oct 2026)**
- **Behance Profile:** [https://www.behance.net/tokayasser2003](https://www.behance.net/tokayasser2003)
- **Languages:** Arabic (Native) • English (Intermediate)
- **Location:** Cairo, Egypt

### Core Value Proposition for Recruiters:
1. **End-to-End Design Process:** Demonstrates that Toka designs with a structured UX methodology (user research, personas, user flows, information architecture, wireframing, high-fidelity UI, usability, and accessibility), rather than merely creating aesthetic visual screens.
2. **Technical Empathy & Feasibility:** Highlights how her Computer Science foundation informs her design decisions (design systems, tokens, responsive viewports, component variants, and smooth developer handoff).
3. **Honest & Grounded Junior Positioning:** Avoids fabricated statistics, fake user interview metrics, or exaggerated senior claims. Missing research data is transparently noted as *"Not provided in academic/concept scope"*.
4. **No Arbitrary Skill Bars:** Organizes competencies into structured UX, UI, and Tool domains with real-world application descriptions instead of arbitrary percentage bars (e.g. no "Figma 95%").
5. **No Personal Photo:** The design identity is built entirely on typographic precision, layout balance, design system tokens, and real project UI artifacts.
6. **Direct CV Download:** The actual CV PDF is directly accessible and downloadable from the Navigation, Hero, About, and Contact sections.

---

## 🚀 Projects & Case Studies Structure

### 1. Foodora — Food Delivery Mobile App (2025)
*End-to-End Ordering Flow from Onboarding & Discovery to Checkout*
- **01. Overview:** Project background and mobile ordering scope.
- **02. Problem & Goal:** Addressing cognitive friction during hunger-state ordering.
- **03. Target Users:** Behavioral archetypes (Time-sensitive, Deliberate explorer, Budget-conscious).
- **04. User Flow:** Sequential FigJam map (Discovery → Restaurant Menu → Dish Customization → Checkout).
- **05. Wireframing & Structural Exploration:** Grayscale wireframes validating persistent bottom navigation and bottom sheet item configuration.
- **06. Design Decisions:** Thumb-zone ergonomics, transparent price breakdown, and WCAG AA contrast.
- **07. High-Fidelity Screens:** Discovery feed, categorized menu, customization bottom sheet, and checkout.
- **08. Interactive Prototype:** Figma prototype transitions (slide-ups, cart counters, sticky summaries).
- **09. Key Takeaways & Learnings:** Balancing appetite appeal with menu scannability; organizing reusable design tokens.
- **External Showcase:** Directly referenced to her [Behance Profile](https://www.behance.net/tokayasser2003).

### 2. Careo — Medical Appointments & Clinic Reservations
*Healthcare Mobile Concept Prioritizing Reassurance & Accessibility*
- **01. Overview:** Context behind clinic scheduling and specialist booking.
- **02. Problem & Goal:** Alleviating patient anxiety through clear doctor credentials and slot clarity.
- **03. User Flow:** Specialty search → Doctor profile card → Date & slot picker → Confirmation receipt.
- **04. Information Architecture:** 4-Tier sitemap (Home/Search, Doctor & Clinic Hub, Appointments Hub, Patient Profile).
- **05. Wireframing & Iteration:** Single-row horizontal calendar strip vs modal calendar trade-offs.
- **06. Key Screens & Visual Direction:** Reassuring clinical blue palette, verified badges, and transparent fees.
- **07. Accessibility Considerations (WCAG):** Minimum 48px touch targets, WCAG AAA color contrast, multi-modal status indicators, and dynamic type scalability.
- **08. Interactive Prototype:** Step-by-step reservation walkthrough.
- **09. Key Learnings:** Designing for high-stress emotional contexts; prioritizing vital information upfront.
- **External Showcase:** Directly referenced to her [Behance Profile](https://www.behance.net/tokayasser2003).

### 3. Quiet Palette — Art Portfolio Landing Page
*Responsive Web Concept Demonstrating Restraint, Typography & Spacing*
- **01. Overview:** Museum-grade editorial showcase for curated artwork.
- **02. Design Goal:** Eliminating competing UI ornamentation so artwork takes center stage.
- **03. Content Structure:** Minimalist header, artist statement hero, curated gallery grid, exhibition log, inquiry footer.
- **04. Wireframing & Responsive Grid Systems:** 12-column desktop (1440px+), 8-column tablet (768px–1024px), and 4-column mobile (375px–430px) responsive breakdown.
- **05. Visual Hierarchy & Spacing:** Typographic scale contrast, intentional negative space, and progressive disclosure.
- **06. Typography & Color Harmony:** Muted natural linen palette (`#FAF8F5`, `#2C2825`, `#8C827A`) paired with editorial serif accent.
- **07. Responsive Design Showcase:** Side-by-side desktop and mobile layout adaptation.
- **08. Learnings & Reflection:** The power of visual restraint; translating CS layout mathematics into Figma auto-layout.
- **External Showcase:** Directly referenced to her [Behance Profile](https://www.behance.net/tokayasser2003).

---

## 🎨 Visual Identity & Design System

- **Themes:** Modern Obsidian Dark Mode (default) with smooth toggle to Studio White Light Mode (`[data-theme="light"]`), with `localStorage` persistence.
- **Typography:**
  - Headings: `Outfit` (Modern geometric sans)
  - Body & UI: `Plus Jakarta Sans` (Humanist, high legibility)
  - Editorial Accent: `Instrument Serif` (Used for art editorial curation)
- **Accessibility:**
  - High color contrast meeting WCAG AA and AAA standards.
  - Visible keyboard focus rings (`:focus-visible`).
  - Semantic landmark elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Dialog modal with `role="dialog"`, `aria-modal="true"`, focus containment, and `Escape` key dismissal.

---

## 📂 Project Directory Structure

```text
TokaYasser/
├── index.html                   # Semantic, accessible HTML5 structure
├── css/
│   ├── style.css                # Global design system, CSS variables, layout, components
│   └── case-study.css           # Case study modal, process flows, wireframe visualizers
├── js/
│   ├── case-studies-data.js     # Structured case study database adhering strictly to CV
│   └── main.js                  # Theme switcher, navigation spy, modal controller, email copy
├── assets/
│   ├── cv/
│   │   └── Toka_Yasser_UIUX_Designer_CV.pdf # Official CV document for download
│   └── images/
│       ├── foodora-showcase.jpg # Foodora high-fidelity mobile UI
│       ├── foodora-wireframes.jpg # Foodora UX wireframe flow diagram
│       ├── careo-showcase.jpg   # Careo medical appointment mobile UI
│       ├── careo-wireframes.jpg # Careo UX wireframe flow diagram
│       └── quiet-palette-showcase.jpg # Quiet Palette responsive web showcase
├── Toka_Yasser_UIUX_Designer_CV .pdf # Source CV document
├── .gitignore                   # Standard git exclusions
└── README.md                    # Project documentation
```

---

## 💻 How to View Locally or Deploy

### Viewing Locally:
Simply open `file:///C:/Users/Acer/.gemini/config/TokaYasser/index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

### Free One-Click Deployment:
- **GitHub Pages:** Push the repository to GitHub, navigate to **Settings → Pages**, and select the `main` branch.
- **Vercel / Netlify:** Drag-and-drop the `TokaYasser` folder directly onto the dashboard.
