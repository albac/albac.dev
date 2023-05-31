import json
import openai


def handler(event, context):
    data = json.loads(event["body"])
    openai.api_key = "API_KEY"  # Reemplaza "API_KEY" con tu propia clave de API

    response = openai.Completion.create(
        model="gpt-3.5-turbo", message=data["prompt"], temperature=1.0, max_tokens=100
    )

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        "body": json.dumps(response["choices"][0]["text"]),
    }
