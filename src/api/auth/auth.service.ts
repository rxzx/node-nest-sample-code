import { Injectable, HttpException, HttpStatus, Ip } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from '../shared/dto/user-dto';
import * as crypto from 'crypto';
import { ApiResponse } from '../shared/dto';
import { User } from '../shared/entities/user.entity';
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async validateUser(user_name: string, password: string): Promise<any> {
        try {
            const user = await this.userService.get_by_username(user_name);
            console.log(JSON.stringify(user));
            if (user) {
                // user.password = crypto.createHmac('sha256', user.password).digest('hex');
                if (user && user.password === password) {
                    const { password, ...result } = user;
                    return result;
                }
            } else {
                return null;
            }
        } catch (ex) {
            throw ex;
        }

    }

    async login(data: UserDTO) {
        let res = new ApiResponse();
        try {
            let user = await this.validateUser(data.user_name, data.password);
            if (user) {
                const payload = { user_name: data.user_name, sub: data.id };
                res.isSuccess = true;
                res.data = {
                    access_token: this.jwtService.sign(payload),
                    user: await this.validateUser(data.user_name, data.password),
                    message: 'done',
                };
            } else {
                res.isSuccess = false;
                res.message = "Invalid Credentials";
            }
            return res;
        } catch (ex) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }

    async register(data: User) {
        let res = new ApiResponse();
        try {
            let user = await this.validateUser(data.user_name, data.password);
            if (!user) {
                await this.userService.insert(data);
                res.isSuccess = true;
                const payload = { user_name: data.user_name, sub: data.id };
                res.data = {
                    access_token: this.jwtService.sign(payload),
                    user: await this.validateUser(data.user_name, data.password)
                };
            } else {
                res.message = "User is already exist";
            }

            return res;
        } catch (ex) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    }


}
