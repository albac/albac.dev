import json
import openai
import boto3
import os

ENCRYPTED = os.environ['OPENAI_KEY']

ssm = boto3.client('ssm')

def handler(event, context):

    print('Json: ', json.dumps(event))
    data = json.loads(event["body"])
    print("JSon data: ", json.dumps(data))
    print("[INFO] SECURESTRING PARAMETER: " + ssm.get_parameter(Name=ENCRYPTED,WithDecryption=True)['Parameter']['Value'])

    apikey = ssm.get_parameter(
            Name=ENCRYPTED, WithDecryption=True)['Parameter']['Value']

    openai.api_key = apikey

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=data['prompt'],
        temperature=0.9,
        max_tokens=2048,
        frequency_penalty=0.5,
        presence_penalty=0
    )

    print("response", json.dumps(response))

    text = response['choices'][0]['text']

    print("data", text)

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
