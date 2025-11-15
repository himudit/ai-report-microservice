import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getUser(@Body dto: UserDto) {
        return this.userService.createUser(dto);
    }
}
