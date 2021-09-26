const jwt = require('jsonwebtoken')
const Hash = require('crypto-js/pbkdf2')
const { pool } = require('../bin/database')
const { sendMail } = require('../middlewares/mailer')
const text = require('../helpers/text')
const config = require('../bin/config')

const signing = (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const body = req.body
        let insert = {
            username: body.username,
            email: body.email,
            password: Hash(body.password, process.env.APP_SECRET).toString(),
            lastname: body.lastname,
            firstname: body.firstname,
            identity_card: body.identity_card,
            phone: body.phone,
            gender: body.gender,
            role: body.role,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        let queryIfUserExist = "SELECT * FROM user WHERE username = '" + [body.username] + "' OR email = '" + [body.email] + "'"
        connection.query(queryIfUserExist, (err, resFind) => {
            // @ts-ignore
            if (!err && resFind.length >= 1) {
                res.status(200).json({ message: 'username_already_used' })
            } else {
                let insertQuery = 'INSERT INTO user SET ?'
                connection.query(insertQuery, insert, async (error, response) => {
                    if (error) throw error
                    let subject = 'Inscription E-Voyage'
                    let html = text.signing(body)
                    await sendMail(body.email, subject, html)
                    res.status(200).json({ user: response, message: 'user_add' })
                })
            }
        })
    })
}

const logger = (req, res) => {
    pool.getConnection((error, connection) => {
        if (error) throw error
        const body = req.body
        let queryIfUserExist = "SELECT * FROM user WHERE username = '" + [body.login] + "' OR email = '" + [body.login] + "'"
        connection.query(queryIfUserExist, (err, response) => {
            // @ts-ignore
            if (!err && response.length === 1) {
                const user = response[0]
                const userObject = {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    email: user.email,
                    role: user.role
                }
                const sign = { exp: Math.floor(Date.now() / 1000) + config.JWT_EXPIRE, sub: user.id }
                const passwordInput = Hash(body.password, process.env.APP_SECRET).toString()
                if (user.password !== passwordInput) {
                    res.status(403).json({ message: "password_error", user: userObject })
                } else {
                    res.status(200).json({ message: "success", user: userObject, token: jwt.sign(sign, config.JWT_SECRET) })
                }
                // @ts-ignore
            } else if (!err && response.length === 0) {
                res.status(403).json({ message: "user_not_in_db" })
            } else {
                res.status(401).send({ error: "Unauthorized", message: "Authentication failed" })
            }
        })
    })
}

module.exports = {
    signing,
    logger
}