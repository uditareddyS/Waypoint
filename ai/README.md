# Waypoint AI / RAG

- Seed data on government schemes (PM SVANidhi, Udyam, UPI onboarding steps, promo templates)
- Bedrock Knowledge Base configuration for retrieval
- Parsing prompt: extracts structured vendor profile from free-text input
- Synthesis prompt: generates scheme match + promo message, with `language` parameter support (English/Hindi/Telugu)

**Status:** Built and validated conversationally. Blocked on Bedrock account quota during the hackathon window — not yet tested against live inference.
