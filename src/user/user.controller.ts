import { Controller, Post, Body, Get } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    return { eh: "iej" };
  }
}
