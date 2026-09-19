import json

KIT_TEMPLATES = {
    "tailor": {
        "scheme": {
            "name": "PM SVANidhi",
            "detail": "A micro-credit scheme offering collateral-free working capital loans up to ₹10,000 for small business owners like tailors, with digital repayment incentives.",
            "amount": "₹10,000"
        },
        "promo": {
            "hindi": "अपने कपड़े सिलवाएं सबसे अच्छे दर्जी से! आज ही विजिट करें।",
            "english": "Get your clothes tailored by the best! Visit our shop today.",
            "telugu": "మీ దుస్తులను ఉత్తమ దర్జీతో కుట్టించుకోండి! ఈరోజే సందర్శించండి."
        }
    },
    "fruit": {
        "scheme": {
            "name": "PM SVANidhi",
            "detail": "A micro-credit scheme offering collateral-free working capital loans up to ₹10,000 for street vendors, with digital repayment incentives.",
            "amount": "₹10,000"
        },
        "promo": {
            "hindi": "रोज़ ताज़े फल! शहर के सबसे अच्छे दामों के लिए हमारे स्टॉल पर आएं।",
            "english": "Fresh fruits daily! Visit our stall for the best prices in town.",
            "telugu": "ప్రతిరోజు తాజా పండ్లు! ఉత్తమ ధరల కోసం మా స్టాల్‌ను సందర్శించండి."
        }
    },
    "tea": {
        "scheme": {
            "name": "PM SVANidhi",
            "detail": "A micro-credit scheme offering collateral-free working capital loans up to ₹10,000 for tea/snack stall owners, with digital repayment incentives.",
            "amount": "₹10,000"
        },
        "promo": {
            "hindi": "गरमा गरम चाय और नाश्ता! अभी आएं।",
            "english": "Hot tea and snacks! Come visit us now.",
            "telugu": "వేడి వేడి టీ మరియు స్నాక్స్! ఇప్పుడే సందర్శించండి."
        }
    },
    "repair": {
        "scheme": {
            "name": "PM SVANidhi",
            "detail": "A micro-credit scheme offering collateral-free working capital loans up to ₹10,000 for repair service providers, with digital repayment incentives.",
            "amount": "₹10,000"
        },
        "promo": {
            "hindi": "मोबाइल और इलेक्ट्रॉनिक्स की मरम्मत यहां करवाएं! भरोसेमंद सेवा।",
            "english": "Get your mobile and electronics repaired here! Trusted service.",
            "telugu": "మీ మొబైల్ మరియు ఎలక్ట్రానిక్స్ ఇక్కడ రిపేర్ చేయించుకోండి! నమ్మకమైన సేవ."
        }
    },
    "beauty": {
        "scheme": {
            "name": "PM SVANidhi",
            "detail": "A micro-credit scheme offering collateral-free working capital loans up to ₹10,000 for beauty and parlour service providers, with digital repayment incentives.",
            "amount": "₹10,000"
        },
        "promo": {
            "hindi": "सुंदरता और स्टाइल के लिए हमारे पार्लर आएं! विशेष ऑफर।",
            "english": "Visit our parlour for beauty and style! Special offers available.",
            "telugu": "అందం మరియు స్టైల్ కోసం మా పార్లర్‌ను సందర్శించండి! ప్రత్యేక ఆఫర్‌లు."
        }
    }
}

UDYAM_DEFAULT = {
    "scheme": {
        "name": "Udyam Registration",
        "detail": "Free registration for small businesses of any type — the first step to becoming eligible for most MSME government schemes and credit support.",
        "amount": "Free"
    },
    "promo": {
        "hindi": "अपने व्यवसाय को पंजीकृत करें और सरकारी योजनाओं का लाभ उठाएं!",
        "english": "Register your business today and unlock government scheme benefits!",
        "telugu": "మీ వ్యాపారాన్ని నమోదు చేసుకోండి మరియు ప్రభుత్వ పథకాల ప్రయోజనాలను పొందండి!"
    }
}

NO_MATCH = "no_match"

def match_category(text):
    text = text.lower()
    keywords = {
        "tailor": ["tailor", "stitch", "boutique", "clothes", "sew"],
        "fruit": ["fruit", "vegetable", "produce"],
        "tea": ["tea", "snack", "chai"],
        "repair": ["repair", "mobile", "electronics", "phone"],
        "beauty": ["beauty", "parlour", "parlor", "salon"]
    }
    for category, words in keywords.items():
        if any(w in text for w in words):
            return category
    return NO_MATCH

def lambda_handler(event, context):
    try:
        body = json.loads(event.get('body', '{}'))
        vendor_id = body.get('vendorId', 'unknown-vendor-id')
        language = body.get('language', 'hindi').lower()
        business_text = body.get('business_type', '')

        category = match_category(business_text)
        is_matched = category != NO_MATCH
        template = KIT_TEMPLATES.get(category, UDYAM_DEFAULT)

        promo_text = template['promo'].get(language, template['promo']['hindi'])
        language_label = language.capitalize()

        response_data = {
            "vendorId": vendor_id,
            "scheme": template['scheme'],
            "upi": {
                "vpa": "vendor@upi",
                "qrPayload": "upi://pay?pa=vendor@upi&pn=StreetVendor&cu=INR"
            },
            "promo": {
                "language": language_label,
                "text": promo_text
            },
            "_source": "fallback_template" if is_matched else "fallback_default"
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