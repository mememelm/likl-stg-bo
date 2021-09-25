require('dotenv').config()

const config = {
    SERVER_PORT: process.env.SERVER_PORT,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_READ_HOST: process.env.DB_READ_HOST,
    DB_PORT: process.env.DB_PORT
}

module.exports = config