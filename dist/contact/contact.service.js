"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("../utils/nodemailer");
let ContactService = class ContactService {
    async sendContactEmail(sendContactData) {
        const mailOptions = {
            from: 'kyilaxtech@gmail.com',
            to: 'osazeepeter79@gmail.com',
            subject: `Contact Email from ${sendContactData.company}`,
            text: `Email: ${sendContactData.email} \n\nPhoneNumber: ${sendContactData.phone} \n\nCompany: ${sendContactData.company} \n\nMessage: ${sendContactData.message}`,
        };
        return await nodemailer_1.transporter.sendMail(mailOptions);
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)()
], ContactService);
//# sourceMappingURL=contact.service.js.map