/*@type {import('tailwindcss').Config} 
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [],
};*/

import type { Config } from 'tailwindcss'
 
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
