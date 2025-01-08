import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserSchema } from 'src/common/entity/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
