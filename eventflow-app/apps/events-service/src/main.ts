import { NestFactory } from '@nestjs/core';
import { EventsServiceModule } from './events-service.module';
import { ValidationPipe } from '@nestjs/common';
import { SERVICE_PORT } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(EventsServiceModule);
  // Enable Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(SERVICE_PORT.EVENTS_SERVICE);
  console.log(
    `Events Service is running on port ${SERVICE_PORT.EVENTS_SERVICE}`,
  );
}
bootstrap();
