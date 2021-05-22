import { Controller, Get, Param } from '@nestjs/common';
import { TimeService } from './time.service';

@Controller('api')
export class TimeController {
  constructor(private readonly timeService: TimeService) { }

  @Get()
  default(): string {
    return `{"unix": ${new Date().getTime()}, "utc": ${new Date().toUTCString()}}`;
  }

  @Get(':date')
  convertTime(@Param('date') date: string): string {
    console.log(date);
    console.log(typeof date);
    console.log(Date.parse(date));
    return `{"unix": ${new Date(date).getTime()}, "utc": ${new Date(
      date,
    ).toUTCString()}}`;
  }
}
