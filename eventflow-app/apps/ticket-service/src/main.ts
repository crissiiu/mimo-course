import { NestFactory } from '@nestjs/core';
import { TicketServiceModule } from './ticket-service.module';
import { ValidationPipe } from '@nestjs/common';
import { SERVICE_PORT } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(TicketServiceModule);
  // Enable Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(SERVICE_PORT.TICKETS_SERVICE);
  console.log(
    `Events Service is running on port ${SERVICE_PORT.EVENTS_SERVICE}`,
  );
}
bootstrap();
