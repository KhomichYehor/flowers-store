
import { Body, Controller, Get, Post, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInteceptor } from 'src/conception/interceptor';
import { CreateFlowersDto } from './flowers.dto';

@Controller('flowers')
@UseInterceptors(LoggingInteceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateFlowersDto) {
    return this.flowersService.create(dto)
  }
}
