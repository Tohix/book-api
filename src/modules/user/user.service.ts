import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) {}

    findOne(conditions?: any): Promise<User> {
        return this.usersRepository.findOne(conditions);
    }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async create(data: Partial<User>): Promise<User> {
        const userData = this.usersRepository.create(data);
        return this.usersRepository.save(userData);
    }
}
