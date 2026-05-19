import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chart, ChartDocument } from './chart.schema';
import { CreateChartDto } from './dto/create-chart.dto';
import { UpdateChartDto } from './dto/update-chart.dto';

@Injectable()
export class ChartsService {
  constructor(
    @InjectModel(Chart.name) private chartModel: Model<ChartDocument>,
  ) {}

  async create(createChartDto: CreateChartDto): Promise<Chart> {
    const chart = new this.chartModel(createChartDto);
    return chart.save();
  }

  async findAll(): Promise<Chart[]> {
    return this.chartModel.find().exec();
  }

  async findOne(id: string): Promise<Chart> {
    const chart = await this.chartModel.findById(id).exec();
    if (!chart) {
      throw new NotFoundException(`Chart with ID ${id} not found`);
    }
    return chart;
  }

  async update(id: string, updateChartDto: UpdateChartDto): Promise<Chart> {
    const chart = await this.chartModel
      .findByIdAndUpdate(id, updateChartDto, { new: true })
      .exec();
    if (!chart) {
      throw new NotFoundException(`Chart with ID ${id} not found`);
    }
    return chart;
  }

  async remove(id: string): Promise<{ message: string }> {
    const chart = await this.chartModel.findByIdAndDelete(id).exec();
    if (!chart) {
      throw new NotFoundException(`Chart with ID ${id} not found`);
    }
    return { message: `Chart "${chart.title}" deleted successfully` };
  }
}
