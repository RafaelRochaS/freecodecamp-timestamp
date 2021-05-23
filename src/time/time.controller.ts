import { Controller, Get, Param } from '@nestjs/common';
import { TimeService } from './time.service';

@Controller('api')
export class TimeController {
  constructor(private readonly timeService: TimeService) { }

  @Get()
  default(): any {
    return {
      unix: `${new Date().getTime()}`,
      utc: `${new Date().toUTCString()}`,
    };
  }

  @Get(':date')
  convertTime(@Param('date') date: any): any {
    if (parseInt(date) > 10000) {
      date = parseInt(date);
    }
    const dateVar = new Date(date);
    if (isNaN(dateVar.getTime())) {
      return { error: 'Invalid Date' };
    }

    return {
      unix: `${dateVar.getTime()}`,
      utc: `${dateVar.toUTCString()}`,
    };
  }
}
