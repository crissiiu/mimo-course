import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SERVICE_PORT } from '@app/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('register')
  async register(@Body() body: any) {
    try {
      const response = await fetch(
        `http://localhost:${SERVICE_PORT.AUTH_SERVICE}/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        },
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new HttpException(
          data || 'Error from Auth Service',
          response.status,
        );
      }
      return data;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        error.message || 'Internal Server Error connecting to Auth Service',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  async login(@Body() body: any) {
    try {
      const response = await fetch(
        `http://localhost:${SERVICE_PORT.AUTH_SERVICE}/login`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        },
      );

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new HttpException(
          data || 'Error from Auth Service',
          response.status,
        );
      }
      return data;
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        error.message || 'Internal Server Error connecting to Auth Service',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
