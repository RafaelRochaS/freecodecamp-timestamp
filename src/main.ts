import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log(`Server listening on ${PORT}`);
  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
