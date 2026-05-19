import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChartsController } from './charts.controller';
import { ChartsService } from './charts.service';
import { Chart, ChartSchema } from './chart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chart.name, schema: ChartSchema }]),
  ],
  controllers: [ChartsController],
  providers: [ChartsService],
})
export class ChartsModule {}
