import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure CORS
  const allowedOrigins = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(',')
    : ['http://localhost:3000'];
  app.enableCors({
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
