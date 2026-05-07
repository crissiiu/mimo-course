import { DatabaseService } from '@app/database';
import { KAFKA_SERVICE } from '@app/kafka';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { randomBytes } from 'crypto';

@Injectable()
export class TicketServiceService implements OnModuleInit {
  constructor(
    @Inject(KAFKA_SERVICE) private readonly kafkClient: ClientKafka,
    private readonly dbService: DatabaseService,
  ) {}

  async onModuleInit() {
    await this.kafkClient.connect();
  }

  private generateTicketCode(): string {
    return randomBytes(6).toString('hex').toUpperCase();
  }
}
