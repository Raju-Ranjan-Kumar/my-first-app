import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersController } from 'src/controller/user.controller';
import { UserService } from 'src/provider/user.service';
import { UserMiddleWare } from './middleware/user.middleware';

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UserService],
    exports: []
})

export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserMiddleWare).forRoutes('user')
    }

    constructor() {
        console.log("User Module Runing...");
    }
}