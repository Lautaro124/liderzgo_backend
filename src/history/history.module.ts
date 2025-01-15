import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { History, HistorySchema } from 'src/common/entity/history.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: History.name, schema: HistorySchema }]),
  ],
  providers: [HistoryService],
  controllers: [HistoryController],
})
export class HistoryModule {}
