import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, UserDto } from 'src/common/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(userDto: UserDto) {
    const user = await this.usersService.findOne(userDto);

    if (!user || user.password !== userDto.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { user };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(registerDto: RegisterDto) {
    console.log('🚀 ~ AuthService ~ signUp ~ registerDto:', registerDto);
    return await this.usersService.create(registerDto);
  }
}
