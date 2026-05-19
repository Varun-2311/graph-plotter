import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ChartsModule } from './charts/charts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/graph-plotter'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ChartsModule,
  ],
})
export class AppModule {}
