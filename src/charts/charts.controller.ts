import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ChartsService } from './charts.service';
import { CreateChartDto } from './dto/create-chart.dto';
import { UpdateChartDto } from './dto/update-chart.dto';

@Controller('charts')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  // POST /charts — Create a new chart
  @Post()
  create(@Body() createChartDto: CreateChartDto) {
    return this.chartsService.create(createChartDto);
  }

  // GET /charts — Get all charts
  @Get()
  findAll() {
    return this.chartsService.findAll();
  }

  // GET /charts/:id — Get one chart by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chartsService.findOne(id);
  }

  // PATCH /charts/:id — Update a chart
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChartDto: UpdateChartDto) {
    return this.chartsService.update(id, updateChartDto);
  }

  // DELETE /charts/:id — Delete a chart
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartsService.remove(id);
  }
}
