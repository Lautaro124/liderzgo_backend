import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHistoryDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  class_day: number;

  @IsNumber()
  @IsNotEmpty()
  module: number;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsString()
  @IsNotEmpty()
  course_name: string;

  @IsString()
  @IsNotEmpty()
  title: string;
}

export class FindHistoryDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
