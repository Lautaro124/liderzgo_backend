import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserDto {
  @IsOptional()
  @IsString()
  username?: string;
  @IsOptional()
  @IsEmail()
  email?: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
  @IsOptional()
  @IsNumber()
  phone: number;
  @IsNotEmpty()
  @IsString()
  course_location: string;
}
