import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return [
      {
        id: 'sdjjsd',
        name: 'Adam',
        email: 'adma@GMAIL.COM',
      },
      {
        id: '2',
        name: 'Sarah',
        email: 'adma@GMAIL.COM',
      },
    ];
  }
}
