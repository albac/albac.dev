"use client";

import awsconfig from "../../../src/aws-exports";
import Image from "next/image";
import React from "react";
import useState from "react-usestateref";
import { AiOutlineSend } from "react-icons/ai";
import mePic from "../../../public/me.webp";
import botPic from "../../../public/bot.png";
import ViewAuth from "../../../components/ViewAuth";
import { Amplify, API, Auth } from "aws-amplify";
import { notFound } from "next/navigation";

Amplify.configure({
  ...awsconfig,
});

const models = ["davinci", "turbo"];

async function postData(prompt, model) {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;

  const apiName = "openai";
  const path = `/${model}`;
  const myInit = {
    headers: {
      Authorization: token,
    },
    body: {
      prompt,
    },
  };

  return API.post(apiName, path, myInit);
}

enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
}

interface InputProps {
  onSend: (input: string) => void;
  disabled: boolean;
}

const ChatMessage = ({ text, from }: MessageProps) => {
  return (
    <>
      {from == Creator.Me && (
        <div className="bg-white p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <Image src={mePic} alt="Me" width={40} />
          <p className="text-gray-700">{text}</p>
        </div>
      )}
      {from == Creator.Bot && (
        <div className="bg-gray-100 p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <Image src={botPic} alt="Bot" width={40} />
          <p className="text-gray-700">{text}</p>
        </div>
      )}
    </>
  );
};

const ChatInput = ({ onSend, disabled }: InputProps) => {
  const [input, setInput] = useState("");

  const sendInput = () => {
    onSend(input);
    setInput("");
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode === 13) {
      sendInput();
    }
  };

  return (
    <div className="bg-white border-2 p-2 rounded-lg flex justify-center">
      <input
        value={input}
        onChange={(event: any) => setInput(event.target.value)}
        className="w-full py-2 px-3 text-gray-800 rounded-lg focus:outline-none"
        type="text"
        placeholder="Ask me anything"
        disabled={disabled}
        onKeyDown={(ev) => handleKeyDown(ev)}
      />
      {disabled && (
        <svg
          aria-hidden="true"
          className="mt-2 inline w-6 h-6 mx-2 text-gray-100 animate-spin dark:text-gray-300 fill-gray-500"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      )}
      {!disabled && (
        <button
          className="p-2 rounded-md text-gray-500 bottom-1.5 right-1"
          onClick={() => sendInput()}
        >
          <AiOutlineSend size={20} />
        </button>
      )}
    </div>
  );
};

export default function ChatGPTPage({ params }: { params: { model: string } }) {
  const { model } = params;
  if (!models.includes(model)) {
    notFound();
  }
  const [messages, setMessages, messagesRef] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);

  const callApi = async (input: string) => {
    if (!input.trim()) {
      return;
    }

    setLoading(true);

    const myMessage: MessageProps = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime(),
    };

    setMessages([...messagesRef.current, myMessage]);

    const response = await postData(input, model).catch((e) => {
      console.log("Error: ", e);
    });

    setLoading(false);

    if (response && response.text) {
      const botMessage: MessageProps = {
        text: response.text,
        from: Creator.Bot,
        key: new Date().getTime(),
      };
      setMessages([...messagesRef.current, botMessage]);
    } else {
      // Error message here
    }
  };

  return (
    <ViewAuth>
      <main className="relative max-w-2xl mx-auto">
        <div className="sticky top-0 w-full pt-10 px-4">
          <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
        </div>

        <div className="mt-10 px-4">
          {messages.map((msg: MessageProps) => (
            <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
          ))}
          {messages.length == 0 && (
            <p className="text-center text-gray-400">
              Hello there, this is albac.dev ChatGTP bot
            </p>
          )}
        </div>
      </main>
    </ViewAuth>
  );
}

export function generateStaticParams() {
  return [{ model: "turbo" }, { model: "davinci" }];
}
