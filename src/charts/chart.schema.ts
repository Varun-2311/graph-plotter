import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChartDocument = Chart & Document;

@Schema({ timestamps: true })
export class Chart {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  xLabel: string;

  @Prop({ required: true })
  yLabel: string;

  @Prop({ type: [Number], required: true })
  xData: number[];

  @Prop({ type: [Number], required: true })
  yData: number[];

  @Prop({ default: 'line', enum: ['line', 'bar', 'scatter'] })
  chartType: string;

  @Prop()
  description: string;
}

export const ChartSchema = SchemaFactory.createForClass(Chart);
