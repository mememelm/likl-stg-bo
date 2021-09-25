'use-strict'
require('dotenv').config()
const nodemailer = require('nodemailer')
const config = require('../bin/config')

const sendMail = async (to, subject, html) => {
    let transporter = nodemailer.createTransport({
        // @ts-ignore
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    })
    try {
        let email = await transporter.sendMail({
            from: process.env.SMTP_FROM,
            to: to,
            subject: subject,
            html: html
        })
        if (email) return Promise.resolve(true)
    } catch (error) { }
}

module.exports = { sendMail }