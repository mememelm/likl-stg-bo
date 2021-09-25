'use-strict'
const nodemailer = require('nodemailer')
const config = require('../bin/config')

const sendMail = async (to, subject, html) => {
    let transporter = nodemailer.createTransport({
        host: config.SMTP.host,
        port: config.SMTP.port,
        secure: config.SMTP.secure,
        auth: {
            user: config.SMTP.auth.user,
            pass: config.SMTP.auth.pass
        }
    })
    try {
        let email = await transporter.sendMail({
            from: 'noreplay.evoyage',
            to: to,
            subject: subject,
            html: html
        })
        if (email) return Promise.resolve(true)
    } catch (error) { }
}

module.exports = { sendMail }