import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: [
      'http://localhost:3000',  // Front local
    ],
    credentials: true, // por si en el futuro usas cookies o auth
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200, // evita errores con preflight
  };

  app.enableCors(corsOptions);

  await app.listen(3500);
  console.log(`🚀 Servidor backend corriendo en http://localhost:3500`);
}
bootstrap();
