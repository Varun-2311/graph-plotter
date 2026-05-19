import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  });

  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log('🚀 Graph Plotter API running at http://localhost:3000');
  console.log('📊 Frontend running at http://localhost:3000');
  console.log('🔗 API Base URL: http://localhost:3000/api/charts');
}
bootstrap();
