import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { SeedsService } from './seeds.service';

@Controller('seeds')
export class SeedsController {
  constructor(private seedService: SeedsService) {}

  @Get('users')
  async seedUsers() {
    if (process.env.NODE_ENV !== 'development') {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return await this.seedService.seedUsers();
  }

  @Get('content')
  async seedContent() {
    if (process.env.NODE_ENV !== 'development') {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return await this.seedService.seedContent();
  }

  @Get()
  async seedsAll() {
    if (process.env.NODE_ENV !== 'development') {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    await this.seedService.seedUsers();
    await this.seedService.seedContent();
    return 'Seeds all';
  }
}
