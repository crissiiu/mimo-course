import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateEventDto, UpdateEventDto } from '@app/common';
import { AuthGuard } from '@nestjs/passport';
import { EventsService } from './events.service';
import { Roles, RolesGuard } from '@app/common';

@Controller()
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  //Protected - get my events
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('my-events')
  findMyEvents(@Request() req: { user: { userId: string } }) {
    return this.eventsService.findMyEvents(req.user.userId);
  }

  //public - get a single event
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.eventsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ORGANIZER', 'ADMIN')
  @Post()
  create(
    @Body() createEventDto: CreateEventDto,
    @Request() req: { user: { userId: string; role?: string } },
  ) {
    return this.eventsService.create(
      createEventDto,
      req.user.userId,
      req.user.role || 'USER',
    );
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ORGANIZER', 'ADMIN')
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEventDto: CreateEventDto,
    @Request() req: { user: { userId: string; role?: string } },
  ) {
    return this.eventsService.update(
      id,
      updateEventDto,
      req.user.userId,
      req.user.role || 'USER',
    );
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ORGANIZER', 'ADMIN')
  @Post(':id/publish')
  publish(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req: { user: { userId: string; role?: string } },
  ) {
    return this.eventsService.publish(
      id,
      req.user.userId,
      req.user.role || 'USER',
    );
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ORGANIZER', 'ADMIN')
  @Post(':id/cancel')
  cancel(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req: { user: { userId: string; role?: string } },
  ) {
    return this.eventsService.cancel(
      id,
      req.user.userId,
      req.user.role || 'USER',
    );
  }
}
