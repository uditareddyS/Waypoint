import json
import boto3
import uuid

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('VendorProfiles')

def lambda_handler(event, context):
    try:
        body = json.loads(event.get('body', '{}'))

        business_type = body.get('business_type')
        location = body.get('location') or 'unknown'

        if not business_type:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'business_type is required'})
            }

        vendor_id = str(uuid.uuid4())

        table.put_item(
            Item={
                'vendorId': vendor_id,
                'business_type': business_type,
                'location': location
            }
        )

        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'vendorId': vendor_id, 'message': 'Vendor profile created'})
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }