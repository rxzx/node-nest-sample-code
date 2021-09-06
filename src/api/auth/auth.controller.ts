import { Controller, Post, Request, UseGuards, Body, Ip } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { SigninDTO } from '../shared/dto/signin-dto';
import { UserDTO } from '../shared/dto/user-dto';
import { User } from '../shared/entities/user.entity';

@Controller(`auth`)
export class AuthController {

  constructor(
    private _auth: AuthService
  ) {

  }

  @Post('login')
  async login(@Body() user: SigninDTO, @Ip() ip): Promise<any> {
    user.updated_ip = ip;
    return this._auth.login(user);
  }


  @Post('register')
  async register(@Body() user: User, @Ip() ip): Promise<any> {
    user.updated_ip = ip;
    return this._auth.register(user);
  }



  // @Post()
  // async signIn(@Body() data: SigninDTO) {
  //     const result = await this._auth.validateUser(data.user_name, data.password);
  //     return result;
  // }


}
