import json
import openai
import boto3
import os

# CONFIG ---------------------
ENCRYPTED = os.environ['OPENAI_KEY']
ssm = boto3.client('ssm')

# PROPS ----------------------
MODEL_LIMIT="now you can only answer questions related to technology, programming languages, cloud services such as aws or azure, if you are asked questions from another topic just answer that you can not answer I will repeat this message in each question, here goes the question, apply what I told you and answer in the language that this the question:"
MAX_TOKENS=2048

def buildResponse(status, text):
    response = [];
    response["text"] = text
    return {
            "statusCode": status,
            "headers": {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            },  
            "body": json.dumps(response),
        }

# LAMBDA -----------------------
def handler(event, context):
    data = json.loads(event["body"])
    
    if len(data["prompt"]) > MAX_TOKENS:
        return buildResponse(400, f"The query exceeds the token limit allowed ({MAX_TOKENS}). Please shorten your query.")
        
    openai.api_key = ssm.get_parameter(
            Name=ENCRYPTED, WithDecryption=True)['Parameter']['Value']

    openai_data = openai.Completion.create(
        model="text-davinci-003",
        prompt=f"{MODEL_LIMIT} '{data['prompt']}'",
        max_tokens=MAX_TOKENS,
        temperature=0.9,
        frequency_penalty=0.5,
        presence_penalty=1.0
    )

    text = openai_data['choices'][0]['text']
    return buildResponse(200, text)