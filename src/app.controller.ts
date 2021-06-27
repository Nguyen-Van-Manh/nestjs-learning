import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { StoreOwnerDocument } from './Entities/storeOwner.entity';
import { StoreOwnersService } from './store-owners/store-owners.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private storeOwnersService: StoreOwnersService,
    private authService: AuthService
  ) { }
  @Post('auth/signup')
  async createUser(
    @Body('username') username: String,
    @Body('password') password: String,
    @Body('store_id') store_id: Number
  ): Promise<StoreOwnerDocument> {
    return await this.storeOwnersService.createNewOwner(username, password, store_id);
  }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
