import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { CommentsModule } from './comments/comments.module'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './auth/jwt.strategy'

@Module({
  imports: [
    UsersModule,
    CommentsModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
