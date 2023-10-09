import { NestFactory } from '@nestjs/core';
import { RootModule } from './module/root.module';
import { Request, Response, NextFunction } from 'express';

function globleMiddleWare(req: Request, res: Response, next: NextFunction) {
    console.log("Middleware Running...");
    next();
}

async function appRuning() {
    const app = await NestFactory.create(RootModule);
    app.use(globleMiddleWare);

    await app.listen(3000);
}

appRuning();