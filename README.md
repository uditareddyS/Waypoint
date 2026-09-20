# Waypoint — Street Vendor Digitalization Agent

**Live demo:** http://waypoint-app-technovas.s3-website-ap-southeast-2.amazonaws.com/

Built for AWS "First Commit" (WeMakeDevs x AWS)

## What it does

A vendor describes their business in plain language — "I sell fruit in Pune's Camp area" — and Waypoint generates a digital starter kit: a matched government scheme with funding details, a scannable UPI QR code, and a ready-to-send WhatsApp promo message in their local language (English/Hindi/Telugu).

## Team

- **Udita** — Frontend, API integration, deployment
- **Hansika** — Backend (Lambda, API Gateway, DynamoDB)
- **Deepanvitha** — AI/RAG (Bedrock Knowledge Base, prompt design)

## Tech stack (AWS Ship It track)

- **Amazon S3** — static frontend hosting
- **API Gateway + Lambda** — vendor profile ingestion and kit generation
- **DynamoDB** — vendor profile storage
- **Amazon Bedrock + Bedrock Knowledge Base** — RAG-based scheme matching and promo generation (see "Known limitations" below)

## Repo structure

- `/frontend` — single-page app (`index.html`), deployed to S3
- `/backend` — Lambda functions and Step Functions pipeline definition
- `/ai` — seed data, Bedrock Knowledge Base setup, prompts

## Known limitations

We hit an Amazon Bedrock account-quota block partway through the hackathon that Support couldn't resolve in time. The submitted demo runs on a documented keyword-based fallback (business type → one of 5 pre-written scheme/promo combinations) to keep the product fully demoable end-to-end. All Bedrock/Knowledge-Base seed data, and both the parsing and synthesis prompts, are built and validated — ready to go live the moment Bedrock access is restored.

The UPI QR code is a real, standards-compliant UPI QR (scannable by any UPI app) using a placeholder merchant ID, since no real bank account/merchant onboarding exists for this demo.

## Future scope

Waypoint is built to grow well beyond this hackathon build. The most immediate next step is real UPI merchant integration — connecting each vendor's actual bank account (via a partner like Razorpay or Setu, or direct NPCI onboarding) so the generated QR code accepts real payments instead of using a placeholder merchant ID. Once Bedrock quota is restored, the keyword-based fallback gets swapped for the live Bedrock Knowledge Base pipeline we already built and validated, giving every vendor a genuinely personalized scheme match and promo message instead of one of five fixed templates. Beyond that, we'd add a real location field so scheme matching can account for state-specific schemes and eligibility, expand language support from 3 to the full 12 Indian languages already scoped in the synthesis prompt, and build a lightweight vendor login so someone can return to their kit later instead of regenerating it each visit. Longer term, the same architecture could support a WhatsApp-native version of Waypoint — since many vendors already live in WhatsApp, meeting them there removes even the small friction of opening a website.

## Setup

The frontend is a single static `index.html` file — no build step required. Open it directly or serve via `npx serve .` inside `/frontend`.
