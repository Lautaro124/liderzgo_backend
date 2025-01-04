import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentDto } from './dto/content.dto';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Post()
  async create(@Body() content: ContentDto) {
    return await this.contentService.create(content);
  }

  @Get(':module')
  async find(@Param('module') module: string) {
    return this.contentService.findModules(module);
  }
}
