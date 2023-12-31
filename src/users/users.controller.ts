import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthGuard } from '@nestjs/passport'
import { CreateUserDTO } from './dto/create-user.dto'

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private UsersServices: UsersService) {}

  @Get()
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
