import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { CreateCommentDto } from './dto/create-comment.dto'

@Controller('comments')
export class CommentsController {
  constructor(private CommentsServices: CommentsService) {}

  @Get(':id')
  userCommentsList(@Param('id') id) {
    return this.CommentsServices.userCommentsList(id)
  }

  @Post()
  createComment(@Body() CreateCommentDto: CreateCommentDto) {
    return this.CommentsServices.createComment(CreateCommentDto)
  }
}
