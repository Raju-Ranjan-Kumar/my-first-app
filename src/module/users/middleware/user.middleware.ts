import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class UserMiddleWare implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("User Middleware runing...");

        let protocol = req.protocol;
        let host = req.get('host');
        let url = req.originalUrl;
        let method = req.method;

        console.log('protocol', protocol, 'host', host, 'url', url, 'method', method);

        next();
    }

}