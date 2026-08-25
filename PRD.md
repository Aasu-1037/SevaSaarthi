# SevaSaathi — Web Prototype PRD

## 1. Product

**Name:** SevaSaathi  
**Type:** Responsive web website / web application  
**Target:** Gujarat citizens  
**Inspired service:** Digital Gujarat  
**Primary prototype service:** Income Certificate  
**Positioning:** Independent citizen-first prototype, not an official government website.

### Core promise

> Government services, without the confusion.

### Product principle

> Don't make citizens understand the government process. Make the process understand the citizen.

---

# 2. Hackathon Goal

Build a polished, functional web prototype that demonstrates how an AI-powered citizen experience could simplify a Digital Gujarat service.

The prototype must show a complete journey:

**Discover → Understand → Prepare → Apply → Submit → Track → Understand → Recover → Resubmit**

Use only synthetic/mock data.

Do not connect to live Gujarat Government systems.

---

# 3. Problem

A citizen may know:

> "I need an income certificate."

But may not know:

- Which service to select.
- Which documents are required.
- Why each document is needed.
- What happens after submission.
- What "under verification" means.
- Whether action is required.
- Why an application was rejected.
- How to correct a rejected application.
- When to follow up.

SevaSaathi turns this bureaucracy into a clear, guided web experience.

---

# 4. Target User

Primary user:

A Gujarat citizen using a phone or laptop who has limited familiarity with government digital services.

Design for:

- Mobile-first usage.
- Gujarati, Hindi and English.
- Limited digital literacy.
- Slower internet connections.
- First-time government-service users.
- Users who prefer plain language over official terminology.

---

# 5. Scope

Only **Income Certificate** needs to be fully functional.

Other services can be shown as secondary cards:

- Income Certificate
- Caste Certificate
- Non-Creamy Layer
- Scholarship
- Pension

Only Income Certificate enters the complete working flow.

---

# 6. Main Citizen Journey

```text
Landing page
    ↓
Start a service
    ↓
Describe what you need
    ↓
AI identifies service
    ↓
Minimal questions
    ↓
Document readiness
    ↓
Application
    ↓
Review
    ↓
Mock submission
    ↓
Application tracking
    ↓
AI explains status
    ↓
Problem / rejection
    ↓
AI explains problem
    ↓
Fix application
    ↓
Resubmit correction
    ↓
Updated tracking state
```

Every major CTA must work.

Avoid static mockup-only screens.

---

# 7. Agentic Experience

The website should feel AI-native and agentic, but the system must remain controlled.

The AI helps the citizen:

- Understand intent.
- Identify the relevant service.
- Ask only necessary questions.
- Explain document requirements.
- Explain confusing terminology.
- Explain application status.
- Recommend the next action.
- Explain rejection reasons.
- Guide correction.

The AI must NOT:

- Make official eligibility decisions.
- Invent government rules.
- Invent documents.
- Claim access to government databases.
- Submit real government applications.
- Request real Aadhaar, PAN, OTP, bank or payment information.
- Claim government affiliation.

Use deterministic workflow logic for application state.

---

# 8. Agent Architecture

```text
                     CITIZEN
                        |
                        v
                 SEVASAATHI WEB
                        |
                        v
                AI ORCHESTRATOR
                        |
        +---------------+---------------+
        |               |               |
        v               v               v
 Service Agent    Document Agent    Status Agent
        |               |               |
        +---------------+---------------+
                        |
                        v
                 Workflow Engine
                        |
                        v
                  Mock Backend
```

## Service Agent

Understands what the citizen wants.

Example:

> "Mare scholarship mate income certificate joiye chhe."

Returns structured intent:

```json
{
  "service": "income_certificate",
  "purpose": "scholarship",
  "language": "gu"
}
```

## Document Agent

Explains required documents using a predefined service knowledge base.

## Status Agent

Converts structured application states into plain-language explanations.

## Recovery Agent

Explains rejection/correction requirements and guides the citizen through recovery.

## Orchestrator

Maintains the session and chooses which AI capability to invoke.

---

# 9. Critical Architecture Rule

The AI explains and guides.

The workflow engine controls application state.

Example:

```text
DRAFT
  ↓
READY_TO_SUBMIT
  ↓
SUBMITTED
  ↓
UNDER_VERIFICATION
  ↓
PROCESSING
  ↓
APPROVED
  ↓
ISSUED
```

Recovery:

```text
UNDER_VERIFICATION
  ↓
NEEDS_CORRECTION
  ↓
CORRECTION_IN_PROGRESS
  ↓
CORRECTION_SUBMITTED
  ↓
UNDER_VERIFICATION
```

Never allow an LLM response to directly change critical application state.

---

# 10. Website Information Architecture

## Public website

- `/`
- `/how-it-works`
- `/services`
- `/about`
- `/demo`

## Working application

- `/demo/start`
- `/demo/service/income-certificate`
- `/demo/documents`
- `/demo/application`
- `/demo/review`
- `/demo/submitted`
- `/demo/status`
- `/demo/recovery`

The entire experience should remain inside one coherent web product.

---

# 11. Landing Page

The landing page should immediately communicate the value.

## Navigation

Logo:

**SEVASAATHI**

Links:

- How it works
- Services
- Why SevaSaathi

Actions:

- Language selector
- Try Demo

Keep navigation minimal.

---

# 12. Hero

Small eyebrow:

> An independent citizen-service prototype

Huge title:

> Government services, without the confusion.

Supporting copy:

> Tell us what you need. SevaSaathi turns complicated processes into clear steps, explains what your status means, and shows you what to do next.

Primary CTA:

> Start a service

Secondary CTA:

> Try the demo

The hero must use **big typography** as a defining visual element.

Recommended responsive typography:

```css
font-size: clamp(3.5rem, 9vw, 9rem);
```

---

# 13. Hero Visual Direction

Create a premium layered hero composition.

Layers:

```text
Background
    ↓
Large decorative typography
    ↓
Floating document card
    ↓
Application status card
    ↓
AI explanation bubble
```

Use subtle parallax.

Do not use government logos or seals.

Do not make the page look like a government portal.

---

# 14. Visual Design Direction

The website should feel like a premium modern product.

Design keywords:

- Editorial
- Premium
- Human
- Spacious
- Confident
- Accessible
- Indian
- Minimal
- Motion-rich
- Trustworthy

Avoid:

- Generic government blue UI.
- Excessive glassmorphism.
- Neon AI aesthetics.
- Giant chatbot widgets.
- Excessive gradients.
- Stock-photo-heavy layouts.
- Fake government branding.
- Cluttered dashboards.

---

# 15. Typography

Use strong typography throughout.

Recommended:

- Inter
- Geist
- Manrope

Gujarati:

- Noto Sans Gujarati

Hindi:

- Noto Sans Devanagari

Typography hierarchy should be dramatic.

Use oversized section titles.

Example:

> The information exists.  
> **The clarity doesn't.**

---

# 16. Smooth Scrolling

Use **Lenis**.

Requirements:

- Smooth desktop scrolling.
- Natural-feeling inertia.
- No excessive lag.
- Mobile remains usable.
- Respect `prefers-reduced-motion`.

Do not make content inaccessible when smooth scrolling is disabled.

---

# 17. Parallax

Use subtle scroll parallax on:

- Hero decorative layers.
- Floating cards.
- Large background typography.
- Selected section visuals.

Do not apply aggressive parallax to forms or important interactive controls.

Reduce/disable parallax for:

```text
prefers-reduced-motion: reduce
```

and on small screens where appropriate.

---

# 18. Homepage Story

## Section 1 — Hero

Government services, without confusion.

## Section 2 — Problem

Large statement:

> Government websites give you information. Citizens need answers.

Show examples of confusing government terminology.

## Section 3 — Solution

> Tell us what you need. We'll show you what to do next.

## Section 4 — Five-step journey

Use zig-zag cards.

## Section 5 — AI experience

Show how natural-language input becomes a personalized workflow.

## Section 6 — Before / After

Compare confusing status language with SevaSaathi explanations.

## Section 7 — Trust and safety

Explain synthetic data and mock integrations.

## Section 8 — Architecture

Show prototype and production architecture.

## Section 9 — Final CTA

> Start with what you need.

## Section 10 — Footer

Strong editorial footer.

---

# 19. Zig-Zag Cards

Create large alternating cards:

```text
                 +-----------------------+
                 | 01                    |
                 | Tell us what you need |
                 +-----------------------+

+-----------------------+
| 02                    |
| Get your documents    |
| ready                 |
+-----------------------+

                 +-----------------------+
                 | 03                    |
                 | Apply without        |
                 | confusion             |
                 +-----------------------+

+-----------------------+
| 04                    |
| Understand your       |
| status                |
+-----------------------+

                 +-----------------------+
                 | 05                    |
                 | Fix problems and     |
                 | continue             |
                 +-----------------------+
```

On mobile, stack vertically.

Each card should have:

- Step number.
- Large title.
- Short description.
- Small visual.
- CTA where useful.

---

# 20. Spotlight Hover Animation

Implement a subtle cursor-following spotlight on major cards.

Behavior:

- Mouse enters card.
- Radial spotlight follows cursor.
- Border subtly reacts.
- Card moves 1–2px.
- Content stays stable.

The effect must be subtle.

Do not turn the interface into a neon/glowing UI.

Disable or reduce the effect on touch devices.

---

# 21. Service Discovery

Heading:

> What are you trying to get done?

Large input:

> Describe what you need in your own words.

Example:

> "I need an income certificate for a scholarship."

Also show suggestion chips:

- Income Certificate
- Scholarship
- Caste Certificate
- Pension

AI identifies the user's intent.

Display:

> We think you need:

## Income Certificate

For: Scholarship

CTA:

> Continue

If confidence is low, ask a clarification question instead of guessing.

---

# 22. AI Conversation

Do not create a generic ChatGPT clone.

AI should appear contextually.

Useful actions:

- Explain this
- What do I need?
- Why is this required?
- What happens next?
- Help me fix this

The AI should operate inside the workflow.

Example:

User:

> "I don't have an electricity bill."

Response:

> That's okay. Let's check which other address proof you have.

Then show structured choices.

---

# 23. Document Readiness

Heading:

> Get your documents ready.

Progress:

> 2 of 4 ready

Cards:

### Identity Proof

Status:

> Ready

### Address Proof

Status:

> Needs attention

Explanation:

> We need one document showing your current address.

Action:

> See options

### Income Proof

Status:

> Ready

### Supporting Document

Status:

> Optional

Each document should include:

> Why do I need this?

This opens a contextual explanation.

---

# 24. Application Flow

Do not create a giant government-style form.

Use a multi-step web flow.

## Step 1

About you.

## Step 2

Why do you need it?

## Step 3

Income information.

## Step 4

Documents.

## Step 5

Review.

Top of each screen:

> Income Certificate

> Step 2 of 5

Include a clear progress indicator.

---

# 25. Review

Heading:

> Check everything once.

Sections:

- Personal details
- Purpose
- Income information
- Documents

Each section has:

> Edit

AI may surface potential inconsistencies as suggestions.

Example:

> You may want to review this value before submitting.

Do not claim official validation.

---

# 26. Mock Submission

Use synthetic information only.

Example:

```text
Name:
Demo Citizen

District:
Surat

Application ID:
DG-DEMO-48291
```

After submission:

# Application submitted

Show:

```text
Submitted
    ↓
Document verification
    ↓
Processing
    ↓
Certificate issued
```

Use a short polished transition.

Do not simulate fake long network delays.

---

# 27. Tracking Dashboard

The status screen is a core product feature.

Hero:

# Your application is on track.

Status:

## Under verification

Explanation:

> Your application has been received and is currently being reviewed.

Then:

### Do I need to do anything?

> No action needed right now.

### What's next?

> Verification → Processing → Certificate

CTA:

> Explain this status

---

# 28. AI Status Explanation

Clicking the status explanation opens a drawer on desktop and bottom sheet on mobile.

Show:

## In simple words

> Your application has reached the review stage.

## Do I need to do anything?

> No.

## What happens next?

> Verification → Processing → Certificate

## Your next action

> Wait for the next update.

The explanation must be generated from structured status data.

---

# 29. Recovery Journey

Create a second demo state.

Status:

> Needs correction

Instead of showing a harsh red "Rejected" screen:

# Something needs fixing.

Explain:

> Your income information needs supporting evidence.

Then:

### What happened?

Simple explanation.

### What do you need?

One supporting document.

### What can you do?

CTA:

> Fix my application

---

# 30. Correction Flow

User should be able to:

1. Open issue.
2. Understand reason.
3. Review information.
4. Add mock document.
5. Confirm correction.
6. Submit.
7. Return to tracking.

Success:

# You're back on track.

Status:

> Correction submitted

Timeline updates automatically.

---

# 31. Language

Support:

- English
- Hindi
- Gujarati

Language selector should be available globally.

AI explanations should use the selected language.

Example Gujarati request:

> "મારે સ્કોલરશીપ માટે આવકનો દાખલો જોઈએ છે."

The system should recognize:

```json
{
  "service": "income_certificate",
  "purpose": "scholarship",
  "language": "gu"
}
```

Do not expose raw model output.

---

# 32. Trust Section

Create a dedicated section:

# Built for citizens. Not pretending to be government.

Explain:

> SevaSaathi is an independent prototype demonstrating how a simpler citizen experience could sit on top of authorized government services.

Show badges/cards:

- Synthetic data
- No real Aadhaar/PAN
- No live government API
- No real payments

Always display:

> Independent prototype — not an official Gujarat Government service.

---

# 33. Architecture Section

Show two layers.

## Prototype

```text
Citizen
   ↓
SevaSaathi Web
   ↓
AI Orchestrator
   ↓
Workflow Engine
   ↓
Mock Service Adapter
   ↓
Synthetic Database
```

## Production concept

```text
Citizen
   ↓
SevaSaathi
   ↓
AI Orchestration
   ↓
Policy / Workflow Engine
   ↓
Authorized Government Adapter
   ↓
Authorized APIs
```

Clearly distinguish the real prototype from future architecture.

---

# 34. Mock Backend

Implement realistic mock APIs.

Example:

```text
POST /api/demo/login
GET  /api/services
GET  /api/applications
GET  /api/applications/:id
POST /api/applications
POST /api/applications/:id/correction
POST /api/documents
POST /api/ai
```

Use SQLite or structured JSON.

Keep application logic outside React components.

---

# 35. Data Models

Create:

```text
User
Application
Document
ServiceRequirement
ApplicationStatus
AIInteraction
Notification
```

Example application:

```json
{
  "id": "DG-DEMO-48291",
  "service": "income_certificate",
  "purpose": "scholarship",
  "district": "Surat",
  "status": "UNDER_VERIFICATION",
  "documents": []
}
```

---

# 36. Service Knowledge Base

Do not hardcode all service rules inside prompts.

Create a structured configuration:

```text
services/
  income-certificate.json
```

Include:

- service name;
- supported languages;
- mock requirements;
- document categories;
- workflow states;
- state explanations;
- correction reasons;
- permitted next actions.

The AI receives this information as context.

This reduces hallucination and makes the architecture extensible.

---

# 37. Demo Accounts

No registration required.

Create:

## Demo A — Happy path

```text
Demo Citizen
District: Surat
Application: DG-DEMO-48291
Status: UNDER_VERIFICATION
```

## Demo B — Recovery path

```text
Demo Citizen
District: Surat
Application: DG-DEMO-58317
Status: NEEDS_CORRECTION
```

Add a clear:

> Try Demo

button.

---

# 38. Footer

Use a large editorial footer.

Main statement:

# Make public services feel public.

Supporting text:

> A prototype exploring how AI can make government digital services easier to understand, navigate and complete.

Links:

- How it works
- Services
- Demo
- Architecture
- About

Legal:

- Independent prototype
- Not a government service
- Synthetic data only

Bottom:

> © 2026 SevaSaathi

Do not use government logos.

---

# 39. Technology

Recommended stack:

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis
- Lucide
- OpenAI API
- SQLite or JSON mock database
- Vercel

OpenAI API keys must remain server-side.

---

# 40. Suggested Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── how-it-works/
│   ├── services/
│   ├── about/
│   ├── demo/
│   │   ├── page.tsx
│   │   ├── start/
│   │   ├── service/
│   │   ├── documents/
│   │   ├── application/
│   │   ├── review/
│   │   ├── submitted/
│   │   ├── status/
│   │   └── recovery/
│   └── api/
│       ├── ai/
│       ├── applications/
│       ├── documents/
│       └── demo/
│
├── components/
│   ├── navigation/
│   ├── hero/
│   ├── cards/
│   ├── spotlight/
│   ├── workflow/
│   ├── application/
│   ├── documents/
│   ├── status/
│   ├── ai/
│   ├── language/
│   └── footer/
│
├── lib/
│   ├── ai/
│   ├── workflow/
│   ├── services/
│   ├── mock-data/
│   └── utils/
│
└── types/
```

---

# 41. Motion System

Use:

- Framer Motion for component/page animation.
- Lenis for scrolling.
- CSS for simple hover states.

Animations:

### Page entrance

Fade + slight upward movement.

### Section reveal

Staggered reveal.

### Cards

Small transform + spotlight.

### Timeline

Sequential reveal.

### AI response

Short streaming-style reveal only where appropriate.

### Application state

Smooth transition between states.

Do not over-animate forms.

---

# 42. Responsive Requirements

Test:

- 390px
- 430px
- 768px
- 1024px
- 1440px

Mobile:

- no horizontal overflow;
- one-column forms;
- stacked zig-zag cards;
- large buttons;
- minimum comfortable touch targets;
- reduced parallax;
- no cursor spotlight;
- compact navigation.

Desktop:

- large typography;
- wide layouts;
- generous whitespace;
- sophisticated card composition;
- parallax and hover interactions.

---

# 43. Accessibility

Implement:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Proper form labels.
- Accessible status announcements.
- Good color contrast.
- Reduced motion.
- Screen-reader-friendly controls.
- Correct language metadata.

Accessibility must not be sacrificed for visual effects.

---

# 44. Performance

Target:

- Lighthouse Performance > 90.
- Fast initial load.
- Optimized images.
- Lazy-load non-critical assets.
- Avoid unnecessary client-side JavaScript.
- Avoid heavy background video.
- Keep animations GPU-friendly.
- Website should remain usable on slower connections.

---

# 45. AI Safety Rules

The system prompt must enforce:

```text
You are SevaSaathi, an independent citizen-service guidance assistant.

You explain the provided prototype service rules in simple language.

You may:
- clarify information
- explain requirements
- summarize application status
- suggest next actions
- translate explanations

You must not:
- claim to be a government employee
- claim government affiliation
- claim access to government databases
- make official eligibility decisions
- invent requirements
- invent processing times
- request real Aadhaar, PAN, OTP, payment or bank information
- claim a real application was submitted
- claim a certificate was officially issued
```

If the provided data is insufficient:

> I don't have enough information to determine that from this prototype.

---

# 46. Definition of Done

A reviewer should be able to open the public website without instructions and understand the product within seconds.

The reviewer must be able to:

- Open the landing page.
- Start the demo.
- Describe a service in natural language.
- Have AI identify the Income Certificate journey.
- Answer the required questions.
- Review document readiness.
- Complete the mock application.
- Submit it.
- View the application status.
- Ask what the status means.
- Understand whether action is required.
- Open a correction scenario.
- Understand the problem.
- Fix the mock application.
- Resubmit the correction.
- Return to tracking.
- Understand what is real and what is mocked.

---

# 47. Priority Order

## P0 — Must work

1. Landing page.
2. Service discovery.
3. AI intent recognition.
4. Income Certificate flow.
5. Document checklist.
6. Application.
7. Review.
8. Mock submission.
9. Status tracking.
10. AI status explanation.
11. Recovery flow.
12. Correction submission.
13. Mobile responsiveness.
14. Prototype disclosure.
15. OpenAI server-side integration.

## P1 — High-value polish

16. Gujarati.
17. Hindi.
18. Lenis.
19. Parallax.
20. Spotlight hover.
21. Zig-zag sections.
22. Before/after section.
23. Architecture section.
24. Advanced transitions.

## P2 — Only after P0/P1

25. Additional services.
26. Notifications.
27. More advanced agent memory.
28. More document simulations.
29. Analytics.

Do not sacrifice the complete citizen journey for extra features.

---

# 48. Final Demo Journey

Optimize the prototype around this exact story:

```text
"I need an income certificate for a scholarship."
                ↓
AI understands the request
                ↓
Minimal questions
                ↓
Document readiness
                ↓
Application
                ↓
Review
                ↓
Submit
                ↓
UNDER VERIFICATION
                ↓
"What does this mean?"
                ↓
AI explains:
"Your application is being reviewed.
No action is required right now."
                ↓
Switch to NEEDS_CORRECTION demo
                ↓
AI explains the problem
                ↓
Fix document
                ↓
Submit correction
                ↓
"You're back on track."
```

This is the core judging experience.

---

# 49. Product North Star

The entire website should communicate one idea:

> **Government services should adapt to citizens, not the other way around.**

The landing page should sell the vision.

The working application should prove usefulness.

The AI should demonstrate intelligence.

The recovery journey should demonstrate product thinking.

The architecture should demonstrate technical credibility.

The transparency section should demonstrate honesty.

