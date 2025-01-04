import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, UserDto } from 'src/common/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() userDto: UserDto) {
    return await this.authService.signIn(userDto);
  }

  @Post('register')
  async signUp(@Body() registerDto: RegisterDto) {
    return await this.authService.signUp(registerDto);
  }
}
