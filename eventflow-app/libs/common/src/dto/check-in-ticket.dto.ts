import { IsNotEmpty, IsString } from 'class-validator';

export class CheckInTicketDto {
  @IsString({ message: 'Ticket code must be a string' })
  @IsNotEmpty({ message: 'Ticket code must is required' })
  ticketCode!: string;
}
