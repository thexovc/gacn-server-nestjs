import { ContactService } from './contact.service';
import { sendContactDto } from './dto/sendContact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    sendContactEmail(sendContactData: sendContactDto): Promise<{
        message: string;
    }>;
}
