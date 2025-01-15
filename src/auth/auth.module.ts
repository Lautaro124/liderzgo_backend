import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWTOptions } from 'src/common/config/jwtOption.config';

@Module({
  imports: [UsersModule, JwtModule.registerAsync(JWTOptions)],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
