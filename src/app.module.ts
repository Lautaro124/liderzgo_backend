import { Module } from '@nestjs/common';

import { ContentModule } from './content/content.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SeedsModule } from './seeds/seeds.module';

@Module({
  imports: [
    ContentModule,
    MongooseModule.forRoot('mongodb://localhost:27017/data'),
    AuthModule,
    UsersModule,
    SeedsModule,
  ],
})
export class AppModule {}
