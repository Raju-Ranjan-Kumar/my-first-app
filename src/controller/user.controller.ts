import { Controller, Get, Post, Delete, Put, Param, Body, Query } from '@nestjs/common';
import { UserService } from "../provider/user.service";
import { User } from "../module/users/data/user.dto";

@Controller('user')
export class UsersController {
    constructor(private userService: UserService) {}

    @Post("/create")
    createUser(@Body() user: User): string {
        return this.userService.createUserService(user);
    }

    @Get("/getAll")
    getAllUsers(): User[] {
        return this.userService.getAllUsersService();
    }

    @Get("/count")
    countAllUser(): number {
        return this.userService.countAllUserService();
    }

    @Get("/getById/:id")
    getUserById(@Param('id') id: string): User {
        return this.userService.getUserByIdService(id);
    }

    @Delete("/delete/:id")
    deleteUser(@Param('id') id: string): string {
        return this.userService.deleteUserService(id);
    }

    @Put("/update/:id")
    updateUser(@Param('id') id: string, @Body() user: User): string {
        return this.userService.updateUserService(id, user);
    }
}
