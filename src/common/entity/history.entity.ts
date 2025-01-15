import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class History {
  @Prop({
    required: true,
    type: Number,
  })
  class_day: number;

  @Prop({
    required: true,
    type: Number,
  })
  module: number;

  @Prop({
    required: true,
    type: String,
  })
  course_name: string;

  @Prop({
    required: true,
    type: String,
  })
  title: string;

  @Prop({
    required: true,
    type: String,
  })
  email: string;

  @Prop({
    required: true,
    type: String,
  })
  time: string;
}

export type HistoryDocument = HydratedDocument<History>;
export const HistorySchema = SchemaFactory.createForClass(History);
