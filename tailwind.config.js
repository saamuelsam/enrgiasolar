/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#FE7329',
                    darkOrange: '#EA4A12',
                    darkBlue: '#000929',
                    mediumBlue: '#43467D',
                    light: '#F9F9FF',
                }
            },
            fontFamily: {
                sans: ['Albert Sans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
