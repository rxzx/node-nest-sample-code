import { Controller, Get, Param, Post, Body, Delete, Query, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from '../shared/dto/user-dto';
import { User } from '../shared/entities/user.entity';
import { Connection } from 'typeorm/connection/Connection';
import { ApiResponse } from '../shared/dto';

@Controller(`user`)
export class UserController {

    constructor(
        private _userService: UserService,
        private _dbcontext: Connection
    ) {

    }

    

    @Get(':userID')
    async get(@Param('userID') userID) {
        const result = await this._userService.get(userID);
        return result;
    }

    @Post()
    async create(@Body() data: User) {
        const result = await this._userService.insert(data);
        return result;
    }

    @Put(':userID')
    async update(@Query() query, @Body() data: User) {
        const result = await this._userService.update(data);
        return result;
    }

    @Delete()
    async deleteBook(@Query() query) {
        const result = await this._userService.delete(query.userID);
        return result;
    }
}
