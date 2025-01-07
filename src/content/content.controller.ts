import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentDto } from './dto/content.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() content: ContentDto) {
    return await this.contentService.create(content);
  }

  @UseGuards(AuthGuard)
  @Get(':module')
  async find(@Param('module') module: string) {
    return this.contentService.findModules(module);
  }
}
