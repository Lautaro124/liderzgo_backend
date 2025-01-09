import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ContentDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsNumber()
  @IsNotEmpty()
  class_day: number;
  @IsNumber()
  @IsNotEmpty()
  module: number;
  @IsString()
  @IsNotEmpty()
  video: string;
}
