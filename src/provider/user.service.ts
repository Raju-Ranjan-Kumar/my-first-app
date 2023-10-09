import { Injectable } from "@nestjs/common";
import { User } from "../module/users/data/user.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
    public users: User[] = [];

    createUserService(user: User): string {
        user.id = uuidv4();
        this.users.push(user);
        return "User has been created";
    }

    getAllUsersService(): User[] {
        return this.users;
    }

    countAllUserService(): number {
        return this.users.length;
    }

    getUserByIdService(id: string): User {
        const user = this.users.find(currentUser => currentUser.id === id);

        if (user) {
            return user;
        } else {
            throw new Error("User not found");
        }
    }

    deleteUserService(id: string): string {
        const index = this.users.findIndex(currentUser => currentUser.id === id);

        if (index !== -1) {
            this.users.splice(index, 1);
            return "User has been deleted";
        } else {
            throw new Error("User not found");
        }
    }

    updateUserService(id: string, updatedUser: User): string {
        const index = this.users.findIndex(currentUser => currentUser.id === id);

        if (index !== -1) {
            this.users[index] = { ...updatedUser, id };
            return "User has been updated";
        } else {
            throw new Error("User not found");
        }
    }
}
