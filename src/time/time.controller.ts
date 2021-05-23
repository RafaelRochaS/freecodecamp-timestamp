import { Controller, Get, Param } from '@nestjs/common';
import { TimeService } from './time.service';

@Controller('api/timestamp')
export class TimeController {
  constructor(private readonly timeService: TimeService) { }

  @Get()
  default(): any {
    return {
      unix: `${new Date().valueOf()}`,
      utc: `${new Date().toUTCString()}`,
    };
  }

  @Get(':date')
  convertTime(@Param('date') date: any): any {
    if (parseInt(date) > 10000) {
      date = parseInt(date);
    }
    const dateVar = new Date(date);
    if (isNaN(dateVar.valueOf())) {
      return { error: 'Invalid Date' };
    }

    return {
      unix: `${dateVar.valueOf()}`,
      utc: `${dateVar.toUTCString()}`,
    };
  }
}
