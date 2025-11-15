import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './user.dto';
import { post } from 'axios';
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @post()
    getUser(@Body dto: UserDto) {
        return this.userService.createUser(dto);
    }
}
