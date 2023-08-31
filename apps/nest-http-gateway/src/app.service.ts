import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '[nest-http-gateway]: Hello World!';
  }
}
