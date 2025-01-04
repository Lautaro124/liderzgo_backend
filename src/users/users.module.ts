import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserSchema } from 'src/common/entity/user.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
