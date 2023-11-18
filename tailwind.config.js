/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                quicksand: 'Quicksand',
            },
            colors: {
                Gray: {
                    50: '#FEFFFE',
                    100: '#F1F1EF',
                    200: '#ECF0F3',
                },
                Green: {
                    100: '#E6FFFA',
                    200: '#B9F7DA',
                    300: '#7CC695',
                    400: '#3AB6AA',
                    500: '#185D61',
                },
            },
        },
    },
    plugins: [],
}
