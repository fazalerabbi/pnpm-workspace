import {Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import { Logger } from '@pnpmworkspace/logger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    Logger('Hello');
    return this.appService.getHello();
  }
}
