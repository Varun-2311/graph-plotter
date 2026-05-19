export class CreateChartDto {
  title: string;
  xLabel: string;
  yLabel: string;
  xData: number[];
  yData: number[];
  chartType?: string;
  description?: string;
}
