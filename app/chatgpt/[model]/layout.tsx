import { Metadata } from "next";
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Albac.Dev - ChatGPT API Interfaces using OpenAI API",
  description:
    "ChatGPT is a specific implementation of GPT designed for interactive chatting and conversation. It utilizes natural language processing (NLP) and machine learning techniques to understand and generate human-like responses to user input.",
  keywords: [
    "react",
    "chatgpt",
    "openai",
    "next.js",
    "serverless",
    "gpt",
    "api",
    "nlp",
    "aws",
    "amplify",
    "developer",
    "devops",
    "fullstack",
    "alfredo",
    "alfredo baldoceda",
  ],
};

export default function Layout(props: {children: ReactNode}) {
  return props.children;
}
