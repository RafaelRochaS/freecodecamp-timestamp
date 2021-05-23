import { Controller, Get, Param } from '@nestjs/common';
import { TimeService } from './time.service';

@Controller('api')
export class TimeController {
  constructor(private readonly timeService: TimeService) { }

  @Get()
  default(): string {
    return JSON.stringify(
      `{"unix": ${new Date().getTime()}, "utc": ${new Date().toUTCString()}}`,
    );
  }

  @Get(':date')
  convertTime(@Param('date') date: any): string {
    if (parseInt(date) > 10000) {
      date = parseInt(date);
    }
    const dateVar = new Date(date);
    if (isNaN(dateVar.getTime())) {
      return JSON.stringify(`{ error : "Invalid Date" }`);
    }

    return JSON.stringify(
      `{"unix": ${dateVar.getTime()}, "utc": ${dateVar.toUTCString()}}`,
    );
  }
}
