import {
  IsBooleanString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsString()
  lastName: string;
  @IsOptional()
  @IsString()
  image: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber('IR')
  phoneNumber: number;
  @IsBooleanString()
  isMentor: boolean;
  @IsString()
  company: string;
  @IsOptional()
  @IsString()
  @Length(0, 200)
  bio?: string;
  @IsString({ each: true })
  @IsOptional()
  expertise?: [string];
}
