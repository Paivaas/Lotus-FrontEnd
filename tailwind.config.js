/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
      
      
	      background: "var(--background)",
        foreground: "var(--foreground)",
 
        'white': "var(--white)",
        'black': "var(--black)",

        'gray-1': "var(--gray-1)",
        'gray-2': "var(--gray-2)",
        'gray-3': "var(--gray-3)",

        'pink-1': "var(--pink-1)",
        'pink-2': "var(--pink-2)",
        'pink-3': "var(--pink-3)",
        'pink-4': "var(--pink-4)",

        'orange-1': "var(--orange-1)",
        'orange-2': "var(--orange-2)",
        'orange-3': "var(--orange-3)",
        'orange-5': "var(--orange-4)",

        'orange-degrade-1': "var(--orange-degrade-1)",
        'orange-degrade-2': "var(--orange-degrade-2)",
        'orange-degrade-3': "var(--orange-degrade-3)",

        'pink-degrade-1': "var(--pink-degrade-1)",
        'pink-degrade-2': "var(--pink-degrade-2)",
        'pink-degrade-3': "var(--pink-degrade-3)",

        'red-degrade-1': "var(--red-degrade-1)",
        'red-degrade-2': "var(--red-degrade-2)",
        'red-degrade-3': "var(--red-degrade-3)",

        'purple-degrade-1': "var(--purple-degrade-1)",
        'purple-degrade-2': "var(--purple-degrade-2)",
        'purple-degrade-3': "var(--purple-degrade-3)",

        'green-degrade-1': "var(--green-degrade-1)",
        'green-degrade-2': "var(--green-degrade-2)",
        'green-degrade-3': "var(--green-degrade-3)",

       }
    },
  },
  plugins: [],
};