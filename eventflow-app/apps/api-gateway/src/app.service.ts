import { SERVICE_PORT } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `API Gateway is running on port ${SERVICE_PORT.API_GATEWAY}`;
  }
}
