import { Body, Controller, Post } from '@nestjs/common';
import { HistoryService } from './history.service';
import { CreateHistoryDto, FindHistoryDto } from './dto/history.dto';

@Controller('history')
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Post()
  async create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
  }

  @Post('find')
  async find(@Body() { email }: FindHistoryDto) {
    return this.historyService.findHistory(email);
  }
}
