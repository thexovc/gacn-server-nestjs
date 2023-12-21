import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { sendContactDto } from './dto/sendContact.dto';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('sendemail')
  async sendContactEmail(
    @Body(new ValidationPipe()) sendContactData: sendContactDto,
  ) {
    try {
      const res = await this.contactService.sendContactEmail(sendContactData);
      console.log(res.response);
      return { message: 'email sent' };
    } catch (error) {
      // console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
