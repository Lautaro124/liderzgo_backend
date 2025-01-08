import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Content, ContentSchema } from 'src/common/entity/content.entity';
import { User, UserSchema } from 'src/common/entity/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Content.name, schema: ContentSchema },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [SeedsService],
  controllers: [SeedsController],
})
export class SeedsModule {}
