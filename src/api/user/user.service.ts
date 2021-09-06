import { Injectable } from '@nestjs/common';
import { UserDTO } from '../shared/dto/user-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../shared/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    private readonly users: UserDTO[];

    constructor(
        @InjectRepository(User)
        private _usersRepository: Repository<User>,
    ) {
        this.users = [];
    }

    async getall(): Promise<User[]> {
        const list = await this._usersRepository.find();
        return list;
    }

    async get(id: string): Promise<User> {
        return await this._usersRepository.findOne(id);
    }

    async delete(id: string): Promise<void> {
        const data = await this._usersRepository.delete(id);
        console.log(data);
    }

    async get_by_username(user_name: string): Promise<User> {
        return await this._usersRepository.findOne({ user_name: user_name });
    }

    async insert(user: User): Promise<void> {
        user.is_active = true;
        user.is_deleted = true;
        user.created_at = (new Date());
        user.created_by = 0;
        user.modified_at = (new Date());
        user.modified_by = 0;

        await this._usersRepository.insert(user);
    }

    async update(user: User): Promise<void> {
        await this._usersRepository.update(user.id, user);
    }




}


