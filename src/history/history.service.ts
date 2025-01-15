import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { History } from 'src/common/entity/history.entity';
import { CreateHistoryDto } from './dto/history.dto';
import { Model } from 'mongoose';

@Injectable()
export class HistoryService {
  constructor(
    @InjectModel(History.name) private readonly historyModel: Model<History>,
  ) {}

  async updateHistory(createHistoryDto: CreateHistoryDto) {
    return this.historyModel.findOneAndUpdate(
      {
        email: createHistoryDto.email,
        module: createHistoryDto.module,
        course_name: createHistoryDto.course_name,
        title: createHistoryDto.title,
      },
      {
        class_day: createHistoryDto.class_day,
        time: createHistoryDto.time,
      },
      { new: true },
    );
  }

  async create(createHistoryDto: CreateHistoryDto) {
    const findHistory = await this.historyModel.findOne({
      email: createHistoryDto.email,
      module: createHistoryDto.module,
      course_name: createHistoryDto.course_name,
      title: createHistoryDto.title,
    });

    if (findHistory) {
      if (findHistory.class_day <= createHistoryDto.class_day) {
        return this.updateHistory(createHistoryDto);
      }

      return findHistory;
    }

    const createdHistory = new this.historyModel(createHistoryDto);
    return createdHistory.save();
  }

  async findHistory(email: string) {
    return await this.historyModel.find({ email: email }).exec();
  }
}
