import { Module } from '@nestjs/common';

import { ContentModule } from './content/content.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SeedsModule } from './seeds/seeds.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    ContentModule,
    AuthModule,
    UsersModule,
    SeedsModule,
    HistoryModule,
  ],
})
export class AppModule {}
