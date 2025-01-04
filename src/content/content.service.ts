import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Content } from 'src/common/entity/content.entity';
import { ContentDto } from './dto/content.dto';
import { Model } from 'mongoose';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name) private readonly contentModel: Model<Content>,
  ) {}

  async create(constent: ContentDto) {
    const createdContent = new this.contentModel(constent);
    return await createdContent.save();
  }

  async findModules(module: string) {
    return await this.contentModel.find({ module: module }).exec();
  }
}
