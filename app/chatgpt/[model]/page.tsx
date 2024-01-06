// [model]/page.tsx

import React from 'react';
import ChatGPTClient from './ChatGPTClient';

// This function generates static paths for your models.
export async function generateStaticParams() {
    return [{ model: "turbo" }, { model: "davinci" }].map((param) => ({
        params: param,
    }));
}

// The Page component renders the client component with the appropriate model.
const Page = ({ params }) => {
    const { model } = params;

    return <ChatGPTClient model={model} />;
};

export default Page;
