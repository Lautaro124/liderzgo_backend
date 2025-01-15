import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Content {
  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  title: string;

  @Prop({
    required: true,
    type: String,
  })
  content: string;

  @Prop({
    required: true,
    type: Number,
  })
  module: number;

  @Prop()
  video?: string;

  @Prop({
    required: true,
    type: Number,
  })
  class_day: number;

  @Prop({
    required: true,
    type: String,
  })
  course_name: string;
}

export type ContentDocument = HydratedDocument<Content>;
export const ContentSchema = SchemaFactory.createForClass(Content);
