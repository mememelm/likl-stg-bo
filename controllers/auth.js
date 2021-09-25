const jwt = require('jsonwebtoken')
const Hash = require('crypto-js/pbkdf2')
const { pool } = require('../bin/database')
const config = require('../bin/config')

const signin = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        const body = req.body
        let insert = {
            login: body.login,
            password: Hash(body.password, config.APP_SECRET).toString(),
            lastname: body.lastname,
            firstname: body.firstname,
            identity_card: body.identity_card,
            phone: body.phone,
            gender: body.gender,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        let mailQuery = 'SELECT id, login FROM users WHERE login = ?'
        connection.query(mailQuery, [body.email], (err, resEmail) => {
            if (!err && resEmail) {
                res.status(200).json({ message: 'login_already_used' })
            } else {
                let insertQuery = 'INSERT INTO user SET ?'
                connection.query(insertQuery, insert, (error, response) => {
                    if (error) throw error

                })
            }
        })
    })
}

const logger = () => {

}

module.exports = {
    signin,
    logger
}