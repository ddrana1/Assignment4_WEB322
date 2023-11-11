/********************************************************************************
* WEB322 – Assignment 04
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecacollege.ca/about/policies/academic-integrity-policy.html
*
* Name: Divya Devendrasinh Rana Student ID: 100681477 Date: November 10th, 2023
*
********************************************************************************/


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'], // all .ejs files
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['fantasy'],
  },
}
