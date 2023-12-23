import { Injectable } from '@nestjs/common';

import { sendContactDto } from './dto/sendContact.dto';
import { transporter } from 'src/utils/nodemailer';

@Injectable()
export class ContactService {
  async sendContactEmail(sendContactData: sendContactDto): Promise<any> {
    const mailOptions = {
      from: 'GACNWebsite@gacn.com',
      to: 'GACNWebsite@gacn.com',
      subject: `Contact Email from ${sendContactData.company}`,
      text: `Email: ${sendContactData.email} \n\nPhoneNumber: ${sendContactData.phone} \n\nCompany: ${sendContactData.company} \n\nMessage: ${sendContactData.message}`,
    };

    // console.log({ pass: `${process.env.EMAIL_PASSWORD}` });

    return await transporter.sendMail(mailOptions);
  }
}
