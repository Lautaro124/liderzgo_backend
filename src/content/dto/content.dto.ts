import { IsNotEmpty, IsString } from 'class-validator';

export class ContentDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsString()
  @IsNotEmpty()
  module: string;
}
