import { Body, Controller, Post } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentDto } from './dto/content.dto';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Post()
  create(@Body() content: ContentDto) {
    return this.contentService.create(content);
  }
}
