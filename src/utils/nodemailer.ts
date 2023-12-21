// Import nodemailer as a CommonJS module
const nodemailer = require('nodemailer');
// index.js or main.ts
require('dotenv').config();
// console.log(process.env.EMAIL_PASS);

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kyilaxtech@gmail.com',
    pass: `${process.env.EMAIL_PASS}`,
  },
});
