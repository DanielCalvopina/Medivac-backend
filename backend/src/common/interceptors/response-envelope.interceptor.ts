import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class ResponseEnvelopeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const http = context.switchToHttp();
    // const req: any = http.getRequest();

    // ✅ HEAD (pendiente: usuarios / session / jwt)
    // const head = {
    //   requestId: req.requestId ?? null,
    //   sessionId: req.sessionId ?? null,
    //   userId: req.user?.id ?? req.user?.sub ?? null,
    //   path: req.originalUrl ?? req.url,
    //   method: req.method,
    //   timestamp: new Date().toISOString(),
    // };

    return next.handle().pipe(
      map((data) => ({
        head: null,      // 👈 por ahora
        body: data,      // ✅ activo
        error: null,     // ✅ activo
      })),
    );
  }
}
