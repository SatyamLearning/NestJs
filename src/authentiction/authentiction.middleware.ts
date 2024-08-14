import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class AuthentictionMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    console.log("Hey I am Here", req.path);
    next();
  }
}
