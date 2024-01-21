import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#f4aa3a",
          secondary: "#f4f4a1",
          accent: "#1be885",
          neutral: "#272136",
          "base-100": "#ffffff",
          info: "#778ad4",
          success: "#23b893",
          warning: "#f79926",
          error: "#ea535a",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },




}


export default config
//daisyui: {
 // themes: [
 //   {
  ///    mytheme: {
      
//"primary": "#0075ff",
      
//"secondary": "#008200",
      
//"accent": "#e4a100",
      
//"neutral": "#161616",
      
//"base-100": "#fff8f0",
      
//"info": "#116ee6",
      
//"success": "#00ca5c",
      
//"warning": "#efd200",
      
//"error": "#ff0045",
//     },
////    },
//  ],
//},