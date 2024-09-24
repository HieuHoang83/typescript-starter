import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prismaService } from 'src/prisma.service';
@Injectable()
export class UserService {
  constructor(private prismaService: prismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        //@ts-ignore
        email: createUserDto.email,
      },
    });

    if (user) {
      throw new Error('Email already exists');
    } else {
      return this.prismaService.user.create({
        data: {
          name: '123',
          email: createUserDto.email,
          password: createUserDto.password,
        },
      });
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
