import { Injectable } from '@nestjs/common'
import { IComment } from './comment.type'

@Injectable()
export class CommentsService {
  private commentsList: {[key:string]:IComment} = {}


  userCommentsList(id) {
    return this.commentsList[id]
  }

  createComment(newComment) {
    newComment.createDate = new Date()
    newComment.creatorId = '' // i`ll must get creator id from req and cookies
    this.commentsList.creatorId = newComment
    return newComment
  }
}
