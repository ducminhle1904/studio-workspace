import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheckMessage(): string {
    return 'OK';
  }
}
