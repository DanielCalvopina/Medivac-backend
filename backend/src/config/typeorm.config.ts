// src/config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { config as loadEnv } from 'dotenv';

loadEnv();

const {
  // Railway suele inyectar DATABASE_URL automáticamente si usas su Postgres
  DATABASE_URL,

  DB_HOST,
  DB_PORT = '5432',
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_SCHEMA = 'public',

  DB_LOGGING = 'false',
  DB_SSL = 'true',
  DB_SSL_REJECT_UNAUTHORIZED = 'false',

  DB_POOL_MAX = '10',
  DB_POOL_IDLE_MS = '10000',
  DB_CONN_TIMEOUT_MS = '30000',
  PG_STATEMENT_TIMEOUT_MS = '10000',
  PG_IDLE_XACT_TIMEOUT_MS = '30000',
  PG_APP_NAME = 'backend-api',

  DB_RETRY_ATTEMPTS = '8',
  DB_RETRY_DELAY_MS = '2000',
} = process.env;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  // ✅ Prioriza DATABASE_URL (ideal en Railway)
  ...(DATABASE_URL
    ? { url: DATABASE_URL }
    : {
        host: DB_HOST,
        port: Number(DB_PORT),
        username: DB_USER,
        password: DB_PASS,
        database: DB_NAME,
      }),

  schema: DB_SCHEMA,

  // ✅ en dist/config -> .. -> dist/entity
  entities: [join(__dirname, '..', 'entity', '**', '*.{js,ts}')],

  synchronize: false,

  retryAttempts: Number(DB_RETRY_ATTEMPTS),
  retryDelay: Number(DB_RETRY_DELAY_MS),

  logging: DB_LOGGING === 'true',

  // ✅ Railway/Postgres: normalmente requiere SSL
  ssl:
    DB_SSL === 'true'
      ? { rejectUnauthorized: DB_SSL_REJECT_UNAUTHORIZED === 'true' }
      : false,

  extra: {
    max: Number(DB_POOL_MAX),
    idleTimeoutMillis: Number(DB_POOL_IDLE_MS),
    connectionTimeoutMillis: Number(DB_CONN_TIMEOUT_MS),
    keepAlive: true,
    statement_timeout: Number(PG_STATEMENT_TIMEOUT_MS),
    idle_in_transaction_session_timeout: Number(PG_IDLE_XACT_TIMEOUT_MS),
    application_name: PG_APP_NAME,
  },
};
