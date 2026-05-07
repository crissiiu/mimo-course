import { Module } from '@nestjs/common';
import { TicketServiceController } from './ticket-service.controller';
import { TicketServiceService } from './ticket-service.service';
import { KafkaModule } from '@app/kafka';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [KafkaModule.register('ticket-service-group'), DatabaseModule],
  controllers: [TicketServiceController],
  providers: [TicketServiceService],
})
export class TicketServiceModule {}
