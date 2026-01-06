"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const path_1 = require("path");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { DATABASE_URL, DB_HOST, DB_PORT = '5432', DB_USER, DB_PASS, DB_NAME, DB_SCHEMA = 'public', DB_LOGGING = 'false', DB_SSL = 'true', DB_SSL_REJECT_UNAUTHORIZED = 'false', DB_POOL_MAX = '10', DB_POOL_IDLE_MS = '10000', DB_CONN_TIMEOUT_MS = '30000', PG_STATEMENT_TIMEOUT_MS = '10000', PG_IDLE_XACT_TIMEOUT_MS = '30000', PG_APP_NAME = 'backend-api', DB_RETRY_ATTEMPTS = '8', DB_RETRY_DELAY_MS = '2000', } = process.env;
exports.typeOrmConfig = {
    type: 'postgres',
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
    entities: [(0, path_1.join)(__dirname, '..', 'entity', '**', '*.{js,ts}')],
    synchronize: false,
    retryAttempts: Number(DB_RETRY_ATTEMPTS),
    retryDelay: Number(DB_RETRY_DELAY_MS),
    logging: DB_LOGGING === 'true',
    ssl: DB_SSL === 'true'
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
//# sourceMappingURL=typeorm.config.js.map