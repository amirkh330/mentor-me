import { Injectable } from '@nestjs/common'
import { IUSER } from './user.type'
import { v4 as uuidv4 } from 'uuid'
import { convertToKeyValue } from 'src/help/convertKeyValue'

@Injectable()
export class UsersService {
  private usersList: { [key: string]: IUSER } = {
    '9f2a161b-be8d-4a3e-9409-eb7c4a5ed9fc': {
      id: '9f2a161b-be8d-4a3e-9409-eb7c4a5ed9fc',
      firstName: 'amir',
      lastName: 'khakbaz',
      email: 'amir73khakbaz@gmail.com',
      phoneNumber: '09385440212',
      bio: 'hi iam amir hossein',
      company: 'shetab',
      expertise: ['1'],
      image: '',
      isMentor: false,
      commentsCount: 0,
      sessionsCount: 0,
    },
    'da757cd3-97e8-483b-8b05-22ea3e69191f': {
      id: 'da757cd3-97e8-483b-8b05-22ea3e69191f',
      firstName: 'hossein',
      lastName: 'nazari',
      email: 'hossein@gmail.com',
      phoneNumber: '09127012300',
      bio: 'hi iam hossein nazari',
      company: 'shetab',
      expertise: ['2'],
      image: '',
      isMentor: true,
      sessionsCount: 0,
      commentsCount: 0,
    },
  }
  private usersObject: { [key: number]: IUSER }
  onApplicationBootstrap() {
    const myArray = this.usersList
    this.usersObject = convertToKeyValue(myArray)
  }

  findAll() {
    return this.usersList
  }

  createUser(newUser) {
    const idGenerated = uuidv4()
    newUser.id = idGenerated
    newUser.sessionsCount = 0
    newUser.commentsCount = 0
    this.usersList.id = newUser
    return newUser.id
  }

  findById(id) {
    return this.usersObject[id]
  }
}
