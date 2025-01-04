import { Module } from '@nestjs/common';

import { ContentModule } from './content/content.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ContentModule,
    MongooseModule.forRoot('mongodb://localhost:27017/data'),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
