/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    lightMode: "class",
    theme: {
        extend: {
            'btn-primary': '#ffffff'
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
    daisyui: {
        themes: [

        ],
        extend: {
        },
    },
}
