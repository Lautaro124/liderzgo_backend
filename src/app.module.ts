import { Module } from '@nestjs/common';

import { ContentModule } from './content/content.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ContentModule,
    MongooseModule.forRoot('mongodb://localhost:27017/data'),
  ],
})
export class AppModule {}
