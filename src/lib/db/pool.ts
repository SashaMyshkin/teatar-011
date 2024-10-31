import mysql, { PoolOptions } from 'mysql2/promise';

const access: PoolOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    waitForConnections: true,
    connectionLimit: process.env.DB_CONNECTION_LIMIT,
    maxIdle: process.env.DB_MAX_IDLE, 
    idleTimeout: process.env.DB_IDLE_TIMEOUT,
};

const pool = mysql.createPool(access);

export { pool }