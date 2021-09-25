require('dotenv').config()

const config = {
    SERVER_PORT: process.env.SERVER_PORT,
    JWT_EXPIRE: 3600,
    JWT_SECRET: 'no_token',
    APP_SECRET: 'lklstgevoyage',
    SMTP: {
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'noreplay.evoyage@gmail.com',
            pass: 'wftzofpubxmxenoi',
        }
    }
}

module.exports = config