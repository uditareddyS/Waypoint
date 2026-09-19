import json

PROMO_TEXT = {
    "hindi": "रोज़ ताज़े फल! शहर के सबसे अच्छे दामों के लिए हमारे स्टॉल पर आएं।",
    "english": "Fresh fruits daily! Visit our stall for the best prices in town.",
    "telugu": "ప్రతిరోజు తాజా పండ్లు! ఉత్తమ ధరల కోసం మా స్టాల్‌ను సందర్శించండి."
}

def lambda_handler(event, context):
    try:
        body = json.loads(event.get('body', '{}'))
        vendor_id = body.get('vendorId', 'unknown-vendor-id')
        language = body.get('language', 'hindi').lower()

        promo_text = PROMO_TEXT.get(language, PROMO_TEXT['hindi'])
        language_label = language.capitalize()

        response_data = {
            "vendorId": vendor_id,
            "scheme": {
                "name": "PM SVANidhi",
                "detail": "A micro-credit scheme offering collateral-free working capital loans up to ₹10,000 for street vendors, with digital repayment incentives.",
                "amount": "₹10,000"
            },
            "upi": {
                "vpa": "vendor@upi",
                "qrPayload": "upi://pay?pa=vendor@upi&pn=StreetVendor&cu=INR"
            },
            "promo": {
                "language": language_label,
                "text": promo_text
            }
        }

        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps(response_data)
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }