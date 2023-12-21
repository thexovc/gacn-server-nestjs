// sendContactDto.dto.ts

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class sendContactDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  company: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
