import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { prismaService } from 'src/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserService, prismaService],
})
export class UserModule {}
