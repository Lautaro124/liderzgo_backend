import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class User {
  @Prop({
    required: true,
    type: String,
  })
  username: string;

  @Prop({
    required: true,
    type: String,
  })
  password: string;

  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  email: string;

  @Prop({
    required: true,
    type: String,
    default: 'student',
  })
  role: string;

  @Prop({
    type: String,
  })
  avatar?: string;

  @Prop({
    type: Number,
  })
  phone?: number;

  @Prop({
    type: String,
    required: true,
  })
  course_location: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  is_active: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  paid: boolean;

  @Prop({
    type: Date,
    required: true,
    default: () => new Date(),
  })
  next_payment_date: Date;

  @Prop({
    type: Number,
    required: true,
    default: 1,
  })
  current_module: number;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
