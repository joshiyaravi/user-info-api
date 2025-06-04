import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('users')
export class PrismaController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async createUser(@Body() createUserDto: { name: string; email: string }) {
    return await this.prismaService.user.create({
      data: createUserDto,
    });
  }

  @Get()
  async getUsers() {
    return await this.prismaService.user.findMany();
  }
}
