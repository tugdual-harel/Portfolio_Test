module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                /*primary: "#010101",*/
                primary: "#312F2F",
            },

            fontFamily: {
                jost: ["Jost", "sans-serif"],
                sen: ["Sen", "sans-serif"],
            },

            screens: {
                custom: "400px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};