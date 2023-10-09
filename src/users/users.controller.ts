import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private UsersServices: UsersService) {}

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.UsersServices.findAll()
  }

  @Get(':id')
  findById(@Param('id') id) {
    return this.UsersServices.findById(id)
  }

  @Post()
  createUSer(@Body() CreateUserDTO: CreateUserDTO) {
    return this.UsersServices.createUser(CreateUserDTO)
  }
}
