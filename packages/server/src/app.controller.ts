import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): any {
    const message = this.appService.getHello();
    return { message };
  }

  @Get('/geoip/:ip/location')
  getLocationDetails(@Req() req: Request): any {
    const ip: string = req.params.ip;
    return this.appService.getIPLocation(ip);
  }
}
