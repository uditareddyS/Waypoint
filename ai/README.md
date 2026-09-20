# Waypoint Backend

## Lambdas
- `ingestVendorProfile.py` — POST /vendor — saves vendor profile to DynamoDB
- `generateVendorKit.py` — POST /vendor/generate — returns scheme match, UPI QR payload, and promo message (currently keyword-based fallback; Bedrock synthesis built and pending quota unblock)

## Step Functions
`vendor-kit-pipeline.json` — orchestration definition for the full parse → retrieve → synthesize flow.
