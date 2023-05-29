import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//export async function GET(request: Request) {
//  return new Response('hi')
//}1

export async function POST(req: Request) {
    const { prompt } = await req.json();
    // console.log(prompt)

    if (!prompt || prompt === "") {
        return new Response("Please send your prompt", { status: 400 });
    }

    const aiResult = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 0.9,
        max_tokens: 2048,
        frequency_penalty: 0.5,
        presence_penalty: 0,
    });

    const response = aiResult.data.choices[0].text?.trim() || "Sorry, there was a problem!";

    // console.log(response)

    return NextResponse.json({ text: response });
}
