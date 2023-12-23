"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require('nodemailer');
require('dotenv').config();
exports.transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: 'GACNWebsite@gacn.com',
        pass: `${process.env.EMAIL_PASS}`,
    },
});
//# sourceMappingURL=nodemailer.js.map