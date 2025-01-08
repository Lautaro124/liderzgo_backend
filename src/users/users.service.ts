import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterDto, UserDto } from 'src/common/dto/user.dto';
import { User } from 'src/common/entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModule) {}

  async findOne(userDto: UserDto): Promise<User | undefined> {
    return await this.userModule
      .findOne({
        $or: [{ username: userDto.username }, { email: userDto.email }],
      })
      .exec();
  }

  async create(registerDto: RegisterDto): Promise<User> {
    return await new this.userModule(registerDto).save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModule
      .find({
        role: 'student',
      })
      .exec();
  }
}
