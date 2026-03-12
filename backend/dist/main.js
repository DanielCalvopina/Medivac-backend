"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const response_envelope_interceptor_1 = require("./common/interceptors/response-envelope.interceptor");
const all_exceptions_filter_1 = require("./common/filters/all-exceptions.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: ['error', 'warn', 'log'],
    });
    app.getHttpAdapter().getInstance().set('trust proxy', 1);
    const origins = (process.env.CORS_ORIGINS ?? 'http://localhost:3000,https://medivac-front-web-production.up.railway.app')
        .split(',')
        .map((o) => o.trim())
        .filter(Boolean);
    const corsOptions = {
        origin: origins,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        optionsSuccessStatus: 200,
    };
    app.enableCors(corsOptions);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.useGlobalInterceptors(new response_envelope_interceptor_1.ResponseEnvelopeInterceptor());
    app.useGlobalFilters(new all_exceptions_filter_1.AllExceptionsFilter());
    const port = Number(process.env.PORT) || 3500;
    await app.listen(port, '0.0.0.0');
    console.log(`🚀 Backend corriendo en puerto ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map