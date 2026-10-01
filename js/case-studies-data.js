/**
 * Case Studies Data Store for Toka Yasser's Portfolio
 * Strictly adheres to CV information without fabricating external statistics or unverified research metrics.
 */

const caseStudiesData = {
  foodora: {
    id: "foodora",
    badge: "Mobile UI/UX Project • 2025",
    title: "Foodora — Food Delivery Mobile App",
    subtitle: "Designing an end-to-end food delivery mobile experience from discovery to checkout with clear visual hierarchy and ergonomic interaction.",
    heroImage: "assets/images/foodora-showcase.jpg",
    wireframeImage: "assets/images/foodora-wireframes.jpg",
    metadata: {
      role: "Junior UI/UX Designer",
      type: "UI/UX Design Project (Academic / Training)",
      year: "2025",
      tools: ["Figma", "FigJam"],
      skills: ["User Flows", "Wireframing", "High-Fidelity UI", "Interactive Prototyping", "Visual Hierarchy", "Typography", "Usability Practices"],
      scope: "End-to-End Mobile Ordering Flow"
    },
    sections: [
      {
        id: "overview",
        title: "01. Overview",
        summary: "Project background and scope of work",
        content: `
          <p><strong>Foodora</strong> is a food delivery mobile application designed to provide a frictionless, end-to-end ordering flow. As part of a comprehensive UI/UX design project in 2025, I tackled the mobile user journey starting from user onboarding and restaurant discovery, through dish customization, cart management, and final checkout.</p>
          <p>The core objective was to create an intuitive, user-centered interface that balances rich visual appetite appeal with clean typography, predictable touch patterns, and transparent pricing information.</p>
        `
      },
      {
        id: "problem-goal",
        title: "02. Problem & Goal",
        summary: "Addressing cognitive load during hunger-state ordering",
        content: `
          <div class="case-grid-two">
            <div class="case-callout-card">
              <span class="callout-tag">The Context & Problem</span>
              <h4>High Friction During Decision-Making</h4>
              <p>In food delivery applications, users typically interact while hungry or pressed for time. Common pain points in existing workflows include cluttered menus, hidden extra fees, confusing dish customization options, and checkout flows that demand too many sequential screen transitions.</p>
              <p class="case-note"><em>Note: Specific user interview data and quantitative metrics were not provided in the original project brief. Problem framing is derived from standard mobile UX heuristics and delivery flow analysis.</em></p>
            </div>
            <div class="case-callout-card accent">
              <span class="callout-tag">The Project Goal</span>
              <h4>A Clear, Reassuring Ordering Journey</h4>
              <p>The goal was to design a clean, predictable, and accessible mobile interface that:</p>
              <ul>
                <li>Streamlines restaurant and cuisine discovery using clear categorizations and visual tags.</li>
                <li>Provides an ergonomic, thumb-friendly bottom-sheet for customizing dish options (sizes, toppings, sauces).</li>
                <li>Ensures transparent order summaries and clear CTAs to reduce checkout drop-off.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "target-users",
        title: "03. Target Users",
        summary: "Defining the primary audience for the application",
        content: `
          <p>The application was structured around typical mobile food delivery consumers, categorized by their distinct ordering motivations:</p>
          <div class="user-archetypes-grid">
            <div class="archetype-card">
              <div class="archetype-icon">⚡</div>
              <h4>The Time-Sensitive Eater</h4>
              <p>Needs rapid re-orders or immediate discovery near their current location with explicit delivery times (e.g., 20–30 mins) visible upfront.</p>
            </div>
            <div class="archetype-card">
              <div class="archetype-icon">🔍</div>
              <h4>The Deliberate Explorer</h4>
              <p>Browses categories, examines dish photos, inspects customer ratings, and customizes specific dietary preferences without losing their place.</p>
            </div>
            <div class="archetype-card">
              <div class="archetype-icon">🏷️</div>
              <h4>The Budget-Conscious Diner</h4>
              <p>Requires immediate visibility into delivery fees, minimum order thresholds, and item pricing before reaching final checkout.</p>
            </div>
          </div>
          <p class="case-note"><em>User segments represent target design archetypes based on delivery usage patterns. Individual demographic interview data: Not provided.</em></p>
        `
      },
      {
        id: "user-flow",
        title: "04. User Flow",
        summary: "Mapping the sequential path from discovery to order placement",
        content: `
          <p>Before moving to visual screens, I mapped out the complete ordering architecture in <strong>FigJam</strong> to eliminate unnecessary dead-ends and minimize the number of taps required to complete an order.</p>
          <div class="flow-diagram-wrapper">
            <div class="flow-step">
              <div class="step-num">01</div>
              <div class="step-title">Location & Discovery</div>
              <div class="step-desc">Auto-detect address, browse cuisine pills, view top-rated spots</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-num">02</div>
              <div class="step-title">Restaurant Menu</div>
              <div class="step-desc">Categorized navigation (Burgers, Sides, Drinks), dish preview cards</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-num">03</div>
              <div class="step-title">Customize Item</div>
              <div class="step-desc">Interactive bottom sheet: Size, toppings, special requests, instant price update</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-num">04</div>
              <div class="step-title">Cart & Checkout</div>
              <div class="step-desc">Itemized summary, delivery time slot, payment selector, 1-tap place order</div>
            </div>
          </div>
        `
      },
      {
        id: "wireframes",
        title: "05. Wireframing & Structural Exploration",
        summary: "Low-fidelity layout iterations and screen architecture",
        content: `
          <p>I created low-fidelity grayscale wireframes in <strong>Figma</strong> to validate visual balance, component hierarchy, and thumb-reach zones before committing to color palettes or typography choices.</p>
          <div class="case-image-container">
            <img src="assets/images/foodora-wireframes.jpg" alt="Foodora UX Wireframe flow and screen structure" class="case-img" loading="lazy" />
            <span class="image-caption">Figure 1: Grayscale UX wireframe flow showing Home Screen, Restaurant Menu, Customization Bottom Sheet, and Order Checkout.</span>
          </div>
          <div class="wireframe-insights">
            <h4>Key Structural Decisions Validated in Wireframes:</h4>
            <ul>
              <li><strong>Persistent Bottom Navigation:</strong> Ensures users can switch between Home, Search, Orders, and Profile from any top-level screen.</li>
              <li><strong>Bottom Sheet for Item Customization:</strong> Keeps the restaurant menu visible in the background, preventing context switching and reducing cognitive disorientation.</li>
              <li><strong>Fixed Bottom CTA on Customization:</strong> Displays the dynamically updated total price directly inside the 'Add to Cart' button.</li>
            </ul>
          </div>
        `
      },
      {
        id: "design-decisions",
        title: "06. Design Decisions & Visual Hierarchy",
        summary: "Translating usability principles into interface elements",
        content: `
          <div class="decisions-grid">
            <div class="decision-card">
              <h4>Thumb-Zone Ergonomics</h4>
              <p>Primary interactive elements (Add to Cart, Category Filter Pills, and Checkout buttons) were placed within the bottom 45% of the viewport to optimize for one-handed smartphone use.</p>
            </div>
            <div class="decision-card">
              <h4>Clear Information Hierarchy</h4>
              <p>Dish cards prioritize the food photograph, followed immediately by title (Semi-Bold), pricing, and a distinct delivery badge. Secondary details like calories or full descriptions remain accessible without overcrowding.</p>
            </div>
            <div class="decision-card">
              <h4>Transparent Price Breakdown</h4>
              <p>The checkout screen clearly separates subtotal, delivery fee, and service taxes, preventing sticker shock right before the payment CTA.</p>
            </div>
            <div class="decision-card">
              <h4>High Color Contrast for Legibility</h4>
              <p>Key interactive actions use high-contrast vibrant orange accents against dark charcoal surfaces, meeting WCAG AA contrast standards for readability in varying ambient light.</p>
            </div>
          </div>
        `
      },
      {
        id: "high-fi",
        title: "07. High-Fidelity Screens & Visual Design",
        summary: "Polished user interface with modern styling and UI components",
        content: `
          <p>The high-fidelity design was developed in <strong>Figma</strong> adhering to an 8px grid system, consistent component variants, and an energetic dark theme with warm culinary accents.</p>
          <div class="case-image-container">
            <img src="assets/images/foodora-showcase.jpg" alt="Foodora High-Fidelity UI Screens" class="case-img" loading="lazy" />
            <span class="image-caption">Figure 2: Foodora High-Fidelity Mobile App UI showcasing Discovery, Dish Cards, and Active Bottom Navigation.</span>
          </div>
          <div class="screen-breakdown-list">
            <div class="screen-item">
              <span class="screen-tag">Screen 1</span>
              <h5>Discovery Home Feed</h5>
              <p>Features location picker in header, sticky search bar, horizontal scrollable category pills, and curated 'Popular Near You' cards with clear distance and rating chips.</p>
            </div>
            <div class="screen-item">
              <span class="screen-tag">Screen 2</span>
              <h5>Restaurant Details & Menu</h5>
              <p>Hero banner with opening hours, average prep time, and pinned category tabs allowing rapid jumps between menu sections.</p>
            </div>
            <div class="screen-item">
              <span class="screen-tag">Screen 3</span>
              <h5>Interactive Customization Sheet</h5>
              <p>Radio buttons for required selections (sizes) and checkboxes for optional toppings, with real-time price reflection.</p>
            </div>
            <div class="screen-item">
              <span class="screen-tag">Screen 4</span>
              <h5>Streamlined Checkout</h5>
              <p>Address verification card, payment method selector (Apple Pay / Credit Card), order item summary, and prominent 'Place Order' action.</p>
            </div>
          </div>
        `
      },
      {
        id: "prototype",
        title: "08. Interactive Prototype",
        summary: "Simulating real-world mobile app interaction flows",
        content: `
          <p>An interactive prototype was built in <strong>Figma</strong> to demonstrate the feel of transitions, smart animations, and interactive component states:</p>
          <ul>
            <li><strong>Bottom Sheet Slide-Up:</strong> Smooth spring animation when tapping any dish card.</li>
            <li><strong>Live Cart Counter:</strong> Badge animation on the cart icon when items are added.</li>
            <li><strong>Sticky Checkout Header:</strong> Smooth collapse as the user scrolls down long order summaries.</li>
          </ul>
          <p class="case-note"><em>Usability testing metrics and quantitative completion rates: Not provided in academic project scope. Prototype was verified through heuristic peer review during Route Academy training.</em></p>
        `
      },
      {
        id: "takeaways",
        title: "09. Key Takeaways & Learnings",
        summary: "Reflections on mobile UX design and technical feasibility",
        content: `
          <div class="learnings-list">
            <div class="learning-item">
              <h5>Balancing Visual Appetite with Scannability</h5>
              <p>I learned that while large food photography is essential for conversion, overly large cards slow down menu navigation. Finding the golden ratio between image preview and text information density was key.</p>
            </div>
            <div class="learning-item">
              <h5>Designing for Edge Cases in Customization</h5>
              <p>Handling multiple required options (e.g. required meat temperature vs optional sauces) taught me how to use clear micro-copy and disable states until mandatory selections are completed.</p>
            </div>
            <div class="learning-item">
              <h5>Connecting CS Knowledge to Design Systems</h5>
              <p>Leveraging my Computer Science background, I structured Figma components into reusable variants with standardized token names, making potential front-end handoff predictable and clean.</p>
            </div>
          </div>
        `
      }
    ]
  },

  careo: {
    id: "careo",
    badge: "Healthcare Mobile UX Concept",
    title: "Careo — Medical Appointments & Clinic Reservations",
    subtitle: "A mobile application concept designed to reduce appointment booking friction, provide transparent doctor credentials, and ensure accessible clinic scheduling.",
    heroImage: "assets/images/careo-showcase.jpg",
    wireframeImage: "assets/images/careo-wireframes.jpg",
    metadata: {
      role: "Junior UI/UX Designer",
      type: "UI/UX Design Project Concept",
      year: "2025 – 2026",
      tools: ["Figma", "Miro", "Notion"],
      skills: ["User Flows", "Information Architecture", "Wireframing", "High-Fidelity UI", "Booking Flows", "Account Management", "Usability & Accessibility"],
      scope: "Doctor Discovery, Scheduling & Appointment Management"
    },
    sections: [
      {
        id: "overview",
        title: "01. Overview",
        summary: "Context and concept behind the medical booking application",
        content: `
          <p><strong>Careo</strong> is a mobile healthcare application concept designed to simplify how patients search for medical specialists, compare clinic availability, and book appointments without the stress of manual phone calls or ambiguous waiting times.</p>
          <p>The project encompassed the complete booking architecture, doctor profile evaluation, interactive time-slot selection, appointment confirmation, and patient account management flows.</p>
        `
      },
      {
        id: "problem-goal",
        title: "02. Problem & Goal",
        summary: "Eliminating anxiety and ambiguity in medical scheduling",
        content: `
          <div class="case-grid-two">
            <div class="case-callout-card">
              <span class="callout-tag">The Healthcare Context</span>
              <h4>Anxiety-Prone Patient Journey</h4>
              <p>Booking a doctor's visit is often accompanied by physical discomfort or emotional anxiety. Traditional booking processes suffer from obscure doctor credentials, unknown consultation fees, and confusing clinic schedules where patients are unsure when their slot is confirmed.</p>
              <p class="case-note"><em>Note: Clinical trial data, patient surveys, and hospital business statistics were not provided. Problem framing reflects general healthcare UX research principles.</em></p>
            </div>
            <div class="case-callout-card accent">
              <span class="callout-tag">The Design Goal</span>
              <h4>Calm, Reassuring & Accessible Booking</h4>
              <p>The goal was to design an experience that feels reassuring, transparent, and effortlessly accessible by:</p>
              <ul>
                <li>Displaying clear doctor specializations, years of experience, and clinic locations upfront.</li>
                <li>Designing an interactive calendar and slot selector that prevents double-booking confusion.</li>
                <li>Providing an immediate confirmation receipt and clear appointment reminders.</li>
                <li>Ensuring strict accessibility compliance for users with visual fatigue or motor limitations.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "user-flow",
        title: "03. User Flow",
        summary: "Step-by-step path for patient reservation and account management",
        content: `
          <p>The primary patient flow was engineered to minimize cognitive friction during stressful situations, moving linearly from intent to confirmation:</p>
          <div class="flow-diagram-wrapper">
            <div class="flow-step">
              <div class="step-num">01</div>
              <div class="step-title">Specialty Search</div>
              <div class="step-desc">Search by symptom, doctor name, or browse medical specialties</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-num">02</div>
              <div class="step-title">Doctor Profile</div>
              <div class="step-desc">Verified badge, clinic affiliation, patient reviews, consultation fee</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-num">03</div>
              <div class="step-title">Date & Time Selection</div>
              <div class="step-desc">Interactive day selector, visual morning/afternoon slot chips</div>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-step">
              <div class="step-num">04</div>
              <div class="step-title">Review & Confirm</div>
              <div class="step-desc">Patient details check, clinic directions map, instant booking pass</div>
            </div>
          </div>
        `
      },
      {
        id: "information-architecture",
        title: "04. Information Architecture",
        summary: "Structuring the clinic reservation ecosystem",
        content: `
          <p>Using <strong>Miro</strong> and <strong>Notion</strong>, I developed a clean, shallow information architecture to ensure essential features are no more than two taps away:</p>
          <div class="ia-grid">
            <div class="ia-branch">
              <h5>1. Home / Search</h5>
              <ul>
                <li>Urgent Care Quick-Access</li>
                <li>Medical Specialty Categories</li>
                <li>Recently Visited Doctors</li>
                <li>Nearby Clinics Map</li>
              </ul>
            </div>
            <div class="ia-branch">
              <h5>2. Doctor & Clinic Hub</h5>
              <ul>
                <li>Doctor Bio & Credentials</li>
                <li>Clinic Working Hours & Facilities</li>
                <li>Available Consultation Types (In-clinic / Video)</li>
                <li>Transparent Pricing Schedule</li>
              </ul>
            </div>
            <div class="ia-branch">
              <h5>3. Appointments Hub</h5>
              <ul>
                <li>Upcoming Bookings with Countdown</li>
                <li>Reschedule & Cancellation Controls</li>
                <li>Past Consultations & Prescription Notes</li>
                <li>Add to Device Calendar Action</li>
              </ul>
            </div>
            <div class="ia-branch">
              <h5>4. Patient Profile</h5>
              <ul>
                <li>Personal & Emergency Contacts</li>
                <li>Insurance Card Details</li>
                <li>Payment Methods</li>
                <li>App Accessibility Preferences</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "wireframes",
        title: "05. Wireframing & Iteration",
        summary: "Designing the core booking interface layouts",
        content: `
          <p>Low-fidelity wireframes focused on solving the complexity of calendar scheduling on compact mobile viewports:</p>
          <div class="case-image-container">
            <img src="assets/images/careo-wireframes.jpg" alt="Careo UX Wireframes showing Doctor Search, Profile, Calendar Booking, and Confirmation" class="case-img" loading="lazy" />
            <span class="image-caption">Figure 3: Wireframe flow showing Doctor Discovery, Search Results, Time Slot Picker, and Final Confirmation Screen with UX annotations.</span>
          </div>
          <div class="wireframe-insights">
            <h4>Key UX Iterations from Wireframing:</h4>
            <ul>
              <li><strong>Horizontal Calendar Strip vs Full Month Grid:</strong> A single-row horizontal day selector was chosen over a full-month modal to keep available time slot chips visible on screen simultaneously without vertical scrolling.</li>
              <li><strong>Slot States (Available, Selected, Booked):</strong> Clear visual demarcation using outline chips for available slots, solid blue for selected, and muted disabled styling with diagonal hatch for unavailable slots.</li>
              <li><strong>Cancellation & Rescheduling Visibility:</strong> Included clear refund/cancellation policy text right above the confirm button to avoid post-booking surprises.</li>
            </ul>
          </div>
        `
      },
      {
        id: "key-screens",
        title: "06. Key Screens & Visual Direction",
        summary: "Clinical elegance, calming palettes, and clear UI affordances",
        content: `
          <p>The visual direction for Careo combines calming medical blues, clinical soft teals, and ample whitespace to establish trust, authority, and emotional reassurance.</p>
          <div class="case-image-container">
            <img src="assets/images/careo-showcase.jpg" alt="Careo High-Fidelity Mobile App UI" class="case-img" loading="lazy" />
            <span class="image-caption">Figure 4: Careo Mobile UI showing Doctor Profile with verified badge, interactive date picker, time slot chips, and primary booking CTA.</span>
          </div>
          <div class="screen-breakdown-list">
            <div class="screen-item">
              <span class="screen-tag">Screen 1</span>
              <h5>Specialist Discovery & Search</h5>
              <p>Instant search bar with auto-suggestions by doctor name, specialty, or clinic facility, accompanied by an icon-assisted specialty grid.</p>
            </div>
            <div class="screen-item">
              <span class="screen-tag">Screen 2</span>
              <h5>Doctor Profile & Credentials Card</h5>
              <p>Prominent professional portrait, specialty badge, verified badge, aggregate star rating with review count, years of experience, and clinic address.</p>
            </div>
            <div class="screen-item">
              <span class="screen-tag">Screen 3</span>
              <h5>Interactive Booking & Time Slot Grid</h5>
              <p>Dynamic month/day selector with available slot chips divided into clear Morning and Afternoon time blocks.</p>
            </div>
            <div class="screen-item">
              <span class="screen-tag">Screen 4</span>
              <h5>Confirmation & Digital Appointment Pass</h5>
              <p>Summary card displaying appointment date, clinic map preview, doctor contact, and 'Add to Calendar' integration.</p>
            </div>
          </div>
        `
      },
      {
        id: "accessibility",
        title: "07. Accessibility Considerations (WCAG)",
        summary: "Ensuring an inclusive experience for diverse health situations",
        content: `
          <div class="a11y-grid">
            <div class="a11y-card">
              <div class="a11y-icon">🎯</div>
              <h5>Touch Targets ≥ 48px</h5>
              <p>All clickable elements, especially date selector buttons and time-slot chips, adhere to minimum 48×48 CSS pixel touch targets with generous 8px spacing to prevent accidental mis-taps.</p>
            </div>
            <div class="a11y-card">
              <div class="a11y-icon">👁️</div>
              <h5>WCAG AAA Color Contrast</h5>
              <p>Primary interactive blue (<code>#0066FF</code> / <code>#0284C7</code>) and slate text achieve contrast ratios exceeding 7:1 against card backgrounds, ensuring effortless readability for visually impaired users.</p>
            </div>
            <div class="a11y-card">
              <div class="a11y-icon">🏷️</div>
              <h5>Multi-Modal Information</h5>
              <p>Never rely solely on color to indicate status. Unavailable slots feature strikethrough text and distinct border styles alongside greyed-out fills.</p>
            </div>
            <div class="a11y-card">
              <div class="a11y-icon">📱</div>
              <h5>Dynamic Type & Scalability</h5>
              <p>Layouts were designed with flexible auto-layout containers that expand vertically without text truncation when users increase their system font size.</p>
            </div>
          </div>
        `
      },
      {
        id: "prototype",
        title: "08. Interactive Prototype & Flow Walkthrough",
        summary: "Testing the appointment reservation flow in Figma",
        content: `
          <p>The interactive prototype was constructed in <strong>Figma</strong> to validate transition speeds and reduce anxiety throughout the booking process:</p>
          <ul>
            <li><strong>Selection Feedback:</strong> Instant active state transition when choosing day and time slots.</li>
            <li><strong>Summary Sheet Confirmation:</strong> Modal overlay validating patient details before triggering the final API booking call.</li>
            <li><strong>Dismissal Safety:</strong> Warning prompt if the user attempts to abandon the flow after filling in personal details.</li>
          </ul>
          <p class="case-note"><em>Formal clinical usability testing data: Not provided in academic project scope. Validated via Route Academy UI/UX usability heuristic evaluation.</em></p>
        `
      },
      {
        id: "learnings",
        title: "09. Key Learnings & Takeaways",
        summary: "Reflections on designing for vulnerable and stressed user mindsets",
        content: `
          <div class="learnings-list">
            <div class="learning-item">
              <h5>Empathy in High-Stress Contexts</h5>
              <p>Designing for healthcare taught me that clarity and calm visual reassurance are far more valuable than flashy animations. Every piece of unnecessary visual noise increases patient anxiety.</p>
            </div>
            <div class="learning-item">
              <h5>Structuring Information Architecture for Rapid Access</h5>
              <p>Understanding how users prioritize credentials (specialty first, followed by location and availability) shaped the visual hierarchy of the doctor cards.</p>
            </div>
            <div class="learning-item">
              <h5>Strict Adherence to Accessibility Standards</h5>
              <p>Accessibility is not an afterthought or a decorative checklist; in healthcare apps, it directly dictates whether a patient can receive timely care or gives up in frustration.</p>
            </div>
          </div>
        `
      }
    ]
  },

  quiet_palette: {
    id: "quiet_palette",
    badge: "Responsive Web UI/UX Concept",
    title: "Quiet Palette — Art Portfolio Landing Page",
    subtitle: "A responsive landing page concept designed to showcase artwork through restrained typography, intentional whitespace, and fluid multi-device layouts.",
    heroImage: "assets/images/quiet-palette-showcase.jpg",
    wireframeImage: "assets/images/quiet-palette-showcase.jpg",
    metadata: {
      role: "Junior UI/UX Designer",
      type: "UI/UX Design Project (Web Concept)",
      year: "2025",
      tools: ["Figma"],
      skills: ["Responsive Web Design", "Visual Hierarchy", "Typography Systems", "Color Theory", "Spacing & Grid Systems", "Multi-Screen Layouts"],
      scope: "Responsive Desktop, Tablet & Mobile Art Gallery Experience"
    },
    sections: [
      {
        id: "overview",
        title: "01. Overview",
        summary: "Project introduction and artistic curation philosophy",
        content: `
          <p><strong>Quiet Palette</strong> is a responsive web landing page concept designed specifically to showcase curated modern artwork, prints, and studio collections. In an era where digital portfolios are frequently overloaded with heavy ornamentation and noisy animations, Quiet Palette adopts an intentional, museum-grade aesthetic.</p>
          <p>The goal was to demonstrate mastery of visual fundamentals: how typography, proportions, negative space, and disciplined color palettes can elevate content without competing with it.</p>
        `
      },
      {
        id: "design-goal",
        title: "02. Design Goal",
        summary: "Letting artwork take center stage through minimalist structure",
        content: `
          <div class="case-grid-two">
            <div class="case-callout-card">
              <span class="callout-tag">The Aesthetic Challenge</span>
              <h4>Preventing Visual Competition</h4>
              <p>Artwork comes in rich varieties of texture, pigment, and mood. If a portfolio website employs vibrant UI accents, complex drop shadows, or competing illustrations, it distracts from the artist's original work.</p>
              <p class="case-note"><em>Note: Specific client brief, gallery sales data, and visitor analytics were not provided. The project was executed as a focused exploration in responsive editorial web design.</em></p>
            </div>
            <div class="case-callout-card accent">
              <span class="callout-tag">The Design Goal</span>
              <h4>Editorial Elegance Across All Screens</h4>
              <p>Create a responsive website layout that:</p>
              <ul>
                <li>Establishes an editorial rhythm through classical serif headings paired with razor-sharp sans-serif body copy.</li>
                <li>Utilizes generous, intentional whitespace (macro and micro) to create breathing room around each piece.</li>
                <li>Transitions fluidly from a spacious 12-column desktop grid to an ergonomic single-column mobile presentation.</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "content-structure",
        title: "03. Content Structure",
        summary: "Architecting the narrative arc of the landing page",
        content: `
          <p>The landing page was structured to guide visitors through a curated editorial journey:</p>
          <div class="ia-grid">
            <div class="ia-branch">
              <h5>1. Minimalist Navigation</h5>
              <p>Understated top bar with artist monogram, clean text links (Home, Portfolio, About, Exhibitions, Contact), and no heavy backgrounds.</p>
            </div>
            <div class="ia-branch">
              <h5>2. Artist Statement Hero</h5>
              <p>A quiet, thought-provoking quotation setting the conceptual tone: <em>'Exploring tranquility through subtle textures and form.'</em></p>
            </div>
            <div class="ia-branch">
              <h5>3. Curated Gallery Grid</h5>
              <p>Filterable artwork collection with category tags (Abstract, Textures, Earth Tones). Each artwork card features subtle frame borders, piece title, medium, and dimensions.</p>
            </div>
            <div class="ia-branch">
              <h5>4. Exhibition & Studio Notes</h5>
              <p>Concise chronological list of past and upcoming exhibitions, press mentions, and an inquiry contact trigger.</p>
            </div>
          </div>
        `
      },
      {
        id: "wireframe-layout",
        title: "04. Wireframing & Responsive Grid Systems",
        summary: "Translating content blocks across responsive breakpoints",
        content: `
          <p>In <strong>Figma</strong>, I established a mathematical responsive grid system to ensure visual balance across standard screen sizes:</p>
          <div class="responsive-spec-grid">
            <div class="spec-card">
              <span class="spec-screen">Desktop (1440px+)</span>
              <h5>12-Column Grid</h5>
              <ul>
                <li>Container Max-Width: 1280px</li>
                <li>Gutter: 32px | Margin: 80px</li>
                <li>Gallery: 3 to 4 column balanced layout</li>
                <li>Generous macro-spacing (120px section padding)</li>
              </ul>
            </div>
            <div class="spec-card">
              <span class="spec-screen">Tablet (768px – 1024px)</span>
              <h5>8-Column Grid</h5>
              <ul>
                <li>Gutter: 24px | Margin: 40px</li>
                <li>Gallery: 2 column adaptive grid</li>
                <li>Navigation collapses to streamlined pill links</li>
                <li>Section padding: 80px</li>
              </ul>
            </div>
            <div class="spec-card">
              <span class="spec-screen">Mobile (375px – 430px)</span>
              <h5>4-Column Grid</h5>
              <ul>
                <li>Gutter: 16px | Margin: 20px</li>
                <li>Gallery: 1 column fluid vertical stack</li>
                <li>Touch-friendly tap targets for piece inspection</li>
                <li>Section padding: 48px</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        id: "visual-hierarchy",
        title: "05. Visual Hierarchy & Spacing",
        summary: "Guiding the user's eye without loud decorative accents",
        content: `
          <p>Visual hierarchy in Quiet Palette is achieved through three deliberate design principles:</p>
          <div class="decisions-grid">
            <div class="decision-card">
              <h4>Scale & Weight Contrast</h4>
              <p>Titles use generous typographic scale (36px–56px) with delicate serif weight, while metadata and descriptions remain restrained (14px–16px) in neutral gray, immediately signaling reading order.</p>
            </div>
            <div class="decision-card">
              <h4>Negative Space as an Active Element</h4>
              <p>Artwork cards are surrounded by ample margins so each piece commands full focus without visual bleed from neighboring items.</p>
            </div>
            <div class="decision-card">
              <h4>Restrained Hover Micro-Interactions</h4>
              <p>Hovering over an artwork card initiates a subtle 2% scale increase and subtle drop-elevation, giving tactile feedback without jarring movement.</p>
            </div>
            <div class="decision-card">
              <h4>Progressive Information Disclosure</h4>
              <p>Secondary details like canvas dimensions and medium are subtly tucked beneath the artwork title, remaining scannable without cluttering the preview.</p>
            </div>
          </div>
        `
      },
      {
        id: "typography-color",
        title: "06. Typography & Color Harmony",
        summary: "The editorial palette and typographic pairing",
        content: `
          <div class="case-grid-two">
            <div class="palette-spec-card">
              <h4>Color System</h4>
              <p>A warm monochromatic canvas inspired by natural linen, raw paper, and studio stone:</p>
              <div class="color-swatches-row">
                <div class="swatch-item">
                  <span class="swatch-color" style="background:#FAF8F5; border:1px solid #E2DCD4;"></span>
                  <span class="swatch-label">Canvas Linen<br><code>#FAF8F5</code></span>
                </div>
                <div class="swatch-item">
                  <span class="swatch-color" style="background:#FFFFFF; border:1px solid #E2DCD4;"></span>
                  <span class="swatch-label">Card Surface<br><code>#FFFFFF</code></span>
                </div>
                <div class="swatch-item">
                  <span class="swatch-color" style="background:#2C2825;"></span>
                  <span class="swatch-label">Deep Ink Text<br><code>#2C2825</code></span>
                </div>
                <div class="swatch-item">
                  <span class="swatch-color" style="background:#8C827A;"></span>
                  <span class="swatch-label">Muted Slate<br><code>#8C827A</code></span>
                </div>
              </div>
            </div>
            <div class="type-spec-card">
              <h4>Typography Pairing</h4>
              <div class="type-sample">
                <span class="type-family-label">Editorial Headings</span>
                <p class="sample-serif">Quiet Palette Studio</p>
                <span class="type-meta">Instrument Serif / Playfair • Elegant, Art-focused</span>
              </div>
              <div class="type-sample">
                <span class="type-family-label">Body & Navigation</span>
                <p class="sample-sans">Plus Jakarta Sans / Inter</p>
                <span class="type-meta">Medium & Regular • High legibility at small sizes</span>
              </div>
            </div>
          </div>
        `
      },
      {
        id: "responsive-design",
        title: "07. Responsive Design Showcase",
        summary: "Side-by-side comparison across desktop and mobile form factors",
        content: `
          <p>A portfolio website must shine equally on a client's desktop monitor and a curator's smartphone. Quiet Palette was constructed from the ground up with flexible CSS auto-layout principles in Figma.</p>
          <div class="case-image-container">
            <img src="assets/images/quiet-palette-showcase.jpg" alt="Quiet Palette Responsive Web Design Showcase on Desktop and Mobile" class="case-img" loading="lazy" />
            <span class="image-caption">Figure 5: Side-by-side comparison of Quiet Palette showing desktop 12-column layout and mobile viewport adaptation.</span>
          </div>
          <div class="wireframe-insights">
            <h4>Responsive Adaptations Highlighted:</h4>
            <ul>
              <li><strong>Fluid Grid Reorganization:</strong> The 4-column desktop gallery seamlessly condenses into a clean 2-column layout on tablet and a single-column fluid masonry on mobile devices.</li>
              <li><strong>Adaptive Spacing:</strong> Vertical whitespace scales down proportionally using responsive clamp formulas to keep mobile content scannable without endless scrolling.</li>
              <li><strong>Mobile Navigation Accessibility:</strong> Desktop horizontal menu items gracefully collapse into an accessible, thumb-friendly mobile menu trigger.</li>
            </ul>
          </div>
        `
      },
      {
        id: "learnings",
        title: "08. Learnings & Reflection",
        summary: "Reflections on minimalist web design and responsive constraints",
        content: `
          <div class="learnings-list">
            <div class="learning-item">
              <h5>The Art of Restraint in UI</h5>
              <p>Designing Quiet Palette reinforced that good design is as much about what you leave out as what you put in. Removing unnecessary borders, heavy shadows, and decorative widgets allowed the artwork to radiate authenticity.</p>
            </div>
            <div class="learning-item">
              <h5>Computer Science Grounding in Responsive Layouts</h5>
              <p>Having studied Computer Science, thinking in terms of CSS Grid, flex wraps, and viewport constraints during the Figma design phase ensured that every component was realistic and straightforward to implement in code.</p>
            </div>
            <div class="learning-item">
              <h5>Typography Hierarchy as the Core Architecture</h5>
              <p>When decorative elements are stripped away, typography bears the full weight of user orientation. Establishing strict font scale ratios and line heights was the deciding factor in making the page feel editorial and premium.</p>
            </div>
          </div>
        `
      }
    ]
  }
};
