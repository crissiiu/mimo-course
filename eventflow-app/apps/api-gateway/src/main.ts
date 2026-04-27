import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVICE_PORT } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? SERVICE_PORT.API_GATEWAY);
}
bootstrap();
