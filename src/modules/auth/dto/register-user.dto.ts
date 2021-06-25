import {IsEmail, IsNotEmpty} from 'class-validator';
import {IsUnique} from '../../../validation/is-unique.validator';

export class RegisterUserDto {
    @IsUnique(
        { table: "user", column: "email" },
        { message: "User with email $value has already exists", groups: ['create'] }
    )
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}