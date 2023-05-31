import json
import openai
import boto3
import os

ENCRYPTED = os.environ['OPENAI_KEY']

ssm = boto3.client('ssm')

def handler(event, context):

    data = json.loads(event["body"])
    openai.api_key = ssm.get_parameter(
            Name=ENCRYPTED, WithDecryption=True)['Parameter']['Value']

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": data['prompt']}
        ],
        temperature=0.9,
        max_tokens=2048,
        frequency_penalty=0.5,
        presence_penalty=0
    )
    print("RESPONSE:")
    print(response)

    text = response['choices'][0]['message']["content"]
    data['text'] = text

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        "body": json.dumps(data),
    }
