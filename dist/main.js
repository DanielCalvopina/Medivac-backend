"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
        credentials: true,
    });
    await app.listen(process.env.PORT ? Number(process.env.PORT) : 4000);
    console.log(`API lista en http://localhost:${process.env.PORT ?? 4000}`);
}
bootstrap();
