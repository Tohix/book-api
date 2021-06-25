import {Controller, Post, Body} from '@nestjs/common';
import {AuthService} from './auth.service';
import {RegisterUserDto} from './dto/register-user.dto';
import {User} from '../user/user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    register(@Body() data: RegisterUserDto): Promise<User> {
        return this.authService.registerUser(data);
    }
}