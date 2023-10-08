import { Injectable } from '@nestjs/common'
import { convertToKeyValue } from 'src/help/convertKeyValue'
import { IComment } from './comment.type'

@Injectable()
export class CommentsService {
  private commentsList: {[key:string]:IComment} = {}

  private commentsObject: { [key: number]: IComment }
  onApplicationBootstrap() {
    const myArray = this.commentsList
    this.commentsObject = convertToKeyValue(myArray)
  }

  userCommentsList(id) {
    return this.commentsObject[id]
  }

  createComment(newComment) {
    newComment.createDate = new Date()
    newComment.creatorId = '' // i`ll must get creator id from req and cookies
    this.commentsList.creatorId = newComment
    return newComment
  }
}
