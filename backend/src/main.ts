import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';

// Importa tus interceptors y filters
import { ResponseEnvelopeInterceptor } from './common/interceptors/response-envelope.interceptor';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  //CAMBIO AQUÍ: Agregamos { logger: ['error', 'warn'] } como segundo argumento
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'], // Esto oculta los logs de "InstanceLoader", "RoutesResolver", etc.
  });

  const corsOptions: CorsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
  };

  app.enableCors(corsOptions);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalInterceptors(new ResponseEnvelopeInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3500);
  
  // Este será el único mensaje "info" que verás al arrancar
  console.log(`🚀 Servidor backend corriendo en http://localhost:3500`);
}
bootstrap();