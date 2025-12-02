// src/config/typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { config as loadEnv } from 'dotenv';

loadEnv();

const {
  DB_HOST = 'localhost',
  DB_PORT = '5432',
  DB_USER = 'medivac',
  DB_PASS = 'medivac123',
  DB_NAME = 'medivac',
  DB_SCHEMA = 'public',

  DB_LOGGING = 'true',
  DB_SSL = 'false',
  DB_SSL_REJECT_UNAUTHORIZED = 'false',

  // pool / timeouts
  DB_POOL_MAX = '10',
  DB_POOL_IDLE_MS = '10000',
  DB_CONN_TIMEOUT_MS = '30000',
  PG_STATEMENT_TIMEOUT_MS = '10000',
  PG_IDLE_XACT_TIMEOUT_MS = '30000',
  PG_APP_NAME = 'backend-api',

  // reintentos
  DB_RETRY_ATTEMPTS = '8',
  DB_RETRY_DELAY_MS = '2000',
} = process.env;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,

  schema: DB_SCHEMA,

  // Carga todas las clases generadas en src/entity (el generador no usa sufijo .entity)
  entities: [join(__dirname, '..', 'entity', '**', '*.{ts,js}')],

  synchronize: false,

  // Reintentos de conexión
  retryAttempts: Number(DB_RETRY_ATTEMPTS),
  retryDelay: Number(DB_RETRY_DELAY_MS),

  // Si quieres que Nest descubra entities añadidas por módulos:
  // autoLoadEntities: true,

  logging: DB_LOGGING === 'true',

  ssl: DB_SSL === 'true'
    ? { rejectUnauthorized: DB_SSL_REJECT_UNAUTHORIZED === 'true' }
    : false,

  // Opciones del pool/driver `pg`
  extra: {
    max: Number(DB_POOL_MAX),
    idleTimeoutMillis: Number(DB_POOL_IDLE_MS),
    connectionTimeoutMillis: Number(DB_CONN_TIMEOUT_MS),
    keepAlive: true,
    statement_timeout: Number(PG_STATEMENT_TIMEOUT_MS),
    idle_in_transaction_session_timeout: Number(PG_IDLE_XACT_TIMEOUT_MS),
    application_name: PG_APP_NAME,
    // maxUses: 7500, // si usas pg >= 8.11 y quieres reciclar conexiones
  },
};
