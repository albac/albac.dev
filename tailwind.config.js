module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/bgdark4.jpg')",
                daytime: "url(/toronto.jpg)",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
