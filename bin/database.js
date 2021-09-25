require("dotenv").config()
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: process.env.DB_WRITE_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
})

module.exports = { pool }