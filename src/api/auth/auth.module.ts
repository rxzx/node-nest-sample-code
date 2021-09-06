import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../shared/entities';


@Module({
  imports: [
    UserModule,
    PassportModule,
    // PassportModule.register({defaultStrategy: 'bearer'})
    JwtModule.register({
      secret: GlobalConstants.jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, LocalStrategy, UserService],
  controllers: [AuthController]
})
export class AuthModule { }

