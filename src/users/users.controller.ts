import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersServices: UsersService) {}

  @Get()
  findAll() {
    return this.UsersServices.findAll();
  }

  @Get(':id')
  findById(@Param('id') id) {
    return this.UsersServices.findById(id);
  }

  @Post()
  createUSer(@Body() CreateUserDTO: CreateUserDTO) {
    return this.UsersServices.createUser(CreateUserDTO);
  }
}
