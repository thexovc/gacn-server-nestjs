"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer = require('nodemailer');
require('dotenv').config();
exports.transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'kyilaxtech@gmail.com',
        pass: `${process.env.EMAIL_PASS}`,
    },
});
//# sourceMappingURL=nodemailer.js.map