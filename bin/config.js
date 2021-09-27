require('dotenv').config()

const config = {
    SERVER_PORT: process.env.SERVER_PORT,
    JWT_EXPIRE: 3600,
    JWT_SECRET: 'lklstgevoyage'
}

module.exports = config