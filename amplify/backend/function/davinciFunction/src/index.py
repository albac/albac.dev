import json
import openai
import boto3
import os

ENCRYPTED = os.environ['OPENAI_KEY']

ssm = boto3.client('ssm')

# PROPS
PROMPT="now you can only answer questions related to technology, programming languages, cloud services such as aws or azure, if you are asked questions from another topic just answer that you can not answer I will repeat this message in each question, here goes the question, apply what I told you and answer in the language that this the question:"
MAX_TOKENS=2048

def handler(event, context):

    data = json.loads(event["body"])
    
    if len(data["prompt"]) > MAX_TOKENS:
        data["text"] = f"The query exceeds the token limit allowed ({MAX_TOKENS}). Please shorten your query."
        return {
            "statusCode": 400,
            "headers": {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },
            "body": json.dumps(data),
        }
        
    openai.api_key = ssm.get_parameter(
            Name=ENCRYPTED, WithDecryption=True)['Parameter']['Value']

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=f"{PROMPT} '{data['prompt']}'",
        max_tokens=MAX_TOKENS,
        temperature=0.9,
        frequency_penalty=0.5,
        presence_penalty=1.0
    )

    text = response['choices'][0]['text']
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
