require("dotenv").config()
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_WRITE_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
})

const connection = {
    HOST: process.env.DB_WRITE_HOST,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_DATABASE,
    dialect: process.env.DATABASE_TYPE,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}

module.exports = { pool, connection }