import { ParseIntPipe } from './../conception/pipes';
import { Controller, Get, Query, UseGuards, UseInterceptors } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInteceptor } from 'src/conception/interceptor';

@Controller('flowers')
@UseInterceptors(LoggingInteceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber)
    return this.flowersService.findAll();
  }
}
