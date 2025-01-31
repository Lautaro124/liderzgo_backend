import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content } from 'src/common/entity/content.entity';
import { User } from 'src/common/entity/user.entity';

@Injectable()
export class SeedsService {
  constructor(
    @InjectModel(Content.name) private readonly contentModule: Model<Content>,
    @InjectModel(User.name) private readonly userModule: Model<User>,
  ) {}

  async seedUsers() {
    const users: User[] = [
      {
        name: 'Juan',
        lastName: 'Perez',
        work: 'Student',
        birthdate: new Date('1990-01-01'),
        role: 'student',
        email: 'juan.perez@example.com',
        password: 'securepassword123',
        course_location: 'Mexico',
        is_active: false,
        paid: false,
        next_payment_date: new Date(),
        current_module: 1,
      },
      {
        name: 'Maria',
        lastName: 'Lopez',
        work: 'Teacher',
        birthdate: new Date('1985-05-15'),
        role: 'teacher',
        email: 'maria.lopez@example.com',
        password: 'securepassword456',
        course_location: 'Mexico',
        is_active: false,
        paid: false,
        next_payment_date: new Date(),
        current_module: 1,
      },
    ];

    await this.userModule.insertMany(users);
    return 'Users seeded';
  }

  async seedContent() {
    const content: Content[] = [
      {
        title: 'Introduction to Programming',
        content: 'Learn the basics of programming',
        module: 1,
        class_day: 1,
        video: 'asdasd',
        course_name: 'Python Programming',
      },
      {
        title: 'Introduction to Databases',
        content: 'Learn the basics of databases',
        module: 2,
        class_day: 2,
        video: 'asdasd',
        course_name: 'Python Programming',
      },
    ];

    await this.contentModule.insertMany(content);
    return 'Content seeded';
  }
}
