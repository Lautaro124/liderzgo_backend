import { Controller, Get } from '@nestjs/common';
import { SeedsService } from './seeds.service';

@Controller('seeds')
export class SeedsController {
  constructor(private seedService: SeedsService) {}

  @Get('users')
  async seedUsers() {
    return await this.seedService.seedUsers();
  }

  @Get('content')
  async seedContent() {
    return await this.seedService.seedContent();
  }

  @Get()
  async seedsAll() {
    await this.seedService.seedUsers();
    await this.seedService.seedContent();
    return 'Seeds all';
  }
}
