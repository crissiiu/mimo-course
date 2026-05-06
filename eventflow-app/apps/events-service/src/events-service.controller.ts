import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EventsServiceService } from './events-service.service';
import { CreateEventDto, UpdateEventDto } from '@app/common';

@Controller()
export class EventsServiceController {
  constructor(private readonly eventsServiceService: EventsServiceService) {}

  @Post()
  create(
    @Body() createEventDto: CreateEventDto,
    @Headers() headers: Record<string, string>,
  ) {
    const userId = headers['x-user-id'];
    return this.eventsServiceService.create(createEventDto, userId);
  }

  @Get()
  findAll() {
    return this.eventsServiceService.findAll();
  }

  @Get('my-events')
  findMyEvents(@Headers() headers: Record<string, string>) {
    const userId = headers['x-user-id'];
    return this.eventsServiceService.findMyEvents(userId);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.eventsServiceService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEventDto: UpdateEventDto,
    @Headers() headers: Record<string, string>,
  ) {
    const userId = headers['x-user-id'];
    const userRole = headers['x-user-role'];
    return this.eventsServiceService.update(
      id,
      updateEventDto,
      userId,
      userRole,
    );
  }

  @Post(':id/publish')
  publish(
    @Param('id', ParseUUIDPipe) id: string,
    @Headers() headers: Record<string, string>,
  ) {
    const userId = headers['x-user-id'];
    const userRole = headers['x-user-role'];
    return this.eventsServiceService.publish(id, userId, userRole);
  }

  @Post(':id/cancel')
  cancel(
    @Param('id', ParseUUIDPipe) id: string,
    @Headers() headers: Record<string, string>,
  ) {
    const userId = headers['x-user-id'];
    const userRole = headers['x-user-role'];
    return this.eventsServiceService.cancel(id, userId, userRole);
  }
}
