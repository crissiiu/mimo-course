import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from '@app/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() data: RegisterDto) {
    return this.authService.register(data);
  }

  @Post('login')
  async login(@Body() data: LoginDto) {
    return this.authService.login(data);
  }

  @Get('profile')
  async getProfile(@Headers('authorization') token: string) {
    return this.authService.getProfile(token);
  }
}
