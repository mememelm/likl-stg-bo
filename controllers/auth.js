const jwt = require('jsonwebtoken')
const Hash = require('crypto-js/pbkdf2')
const { pool } = require('../bin/database')
const { sendMail } = require('../middlewares/mailer')
const text = require('../helpers/text')
const config = require('../bin/config')
const db = require('../models')

const signing = (req, res) => {
    let password = (Math.random() + 1).toString(36).substring(7)
    pool.getConnection((error, connection) => {
        if (error) throw error
        const body = req.body
        let insert = {
            username: body.username,
            email: body.email,
            password: Hash(password, process.env.APP_SECRET).toString(),
            lastname: body.lastname,
            firstname: body.firstname,
            identity_card: body.identity_card,
            phone: body.phone,
            gender: body.gender,
            role: body.role,
            createdAt: new Date(),
            updatedAt: new Date(),
            agencyId: body.agencyId,
            companyId: body.companyId
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
                    let html = text.signing(body, password)
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
        connection.query(queryIfUserExist, async (err, response) => {
            // @ts-ignore
            if (!err && response.length === 1) {
                const user = response[0]
                const userObject = {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    agencyId: user.agencyId,
                    companyId: user.companyId
                }
                const sign = { exp: Math.floor(Date.now() / 1000) + config.JWT_EXPIRE, sub: user.id }
                const passwordInput = Hash(body.password, process.env.APP_SECRET).toString()
                const agency = await db.agency.findByPk(user.agencyId)
                const company = await db.company.findByPk(user.companyId)
                if (user.password !== passwordInput) {
                    return res.status(200).json({
                        message: "password_error",
                        user: userObject,
                        agency: agency,
                        company: company
                    })
                } else {
                    return res.status(200).json({
                        message: "success",
                        user: userObject,
                        token: jwt.sign(sign, config.JWT_SECRET),
                        agency: agency,
                        company: company
                    })
                }
                // @ts-ignore
            } else if (!err && response.length === 0) {
                return res.status(203).json({ message: "user_not_in_db" })
            } else {
                return res.status(401).send({ message: "unauthorized" })
            }
        })
    })
}

module.exports = {
    signing,
    logger
}