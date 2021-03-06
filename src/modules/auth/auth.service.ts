import { Injectable } from '@nestjs/common';
import {UserService} from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(email: string, password: string): Promise<any> {
        // const user = await this.userService.findOne({
        //     email: email
        // });
    }

    registerUser(data: any) {
        return this.userService.create(data);
    }
}
