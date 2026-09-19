import json

def lambda_handler(event, context):
    try:
        body = json.loads(event.get('body', '{}'))
        raw_text = body.get('text', '')

        parsed = {
            "business_type": "fruit",
            "location": "Pune Camp",
            "category": "food_vending"
        }

        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps(parsed)
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }