import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const payload =
      exception instanceof HttpException ? exception.getResponse() : null;

    const details =
      typeof payload === "object" && payload
        ? (payload as any).message ?? payload
        : exception?.message;

    const dbCode = exception?.code; // Postgres/TypeORM a veces pone códigos aquí
    const isDb = !!dbCode;

    const error = {
      code:
        status === 400 ? "VALIDATION_ERROR"
        : isDb ? "DB_ERROR"
        : "INTERNAL_ERROR",
      statusCode: status,
      message:
        exception?.message ??
        (typeof payload === "string" ? payload : "Error"),
      details,
      db: isDb
        ? { code: dbCode, detail: exception?.detail, constraint: exception?.constraint }
        : undefined,
    };

    res.status(status).json({
      head: null,   // 👈 por ahora
      body: null,
      error,        // ✅ activo
    });
  }
}
