const req = require('express/lib/request')
const jwt = require('jsonwebtoken')
const config = require('../bin/config')
const user = require('../controllers/user')

const authenticate = (req, res, next) => {
    const authorization = req.headers['authorization']
    if (authorization) {
        const token = authorization.replace('Bearer ', '').replace('bearer ', '')
        try {
            const decode = jwt.verify(token, config.JWT_SECRET)
            if (decode) {
                currentUSer(decode, res, next)
            }
        } catch (error) { }
    }
    return res.status(401).send({ error: 'Unauthorized', message: 'Authentication failed (token). authorization' })
}

const currentUSer = (decode, res, next) => {
    return user.currentUser(decode.sub, (err, response) => {
        if (!err && response) {
            req.user = response
            return next()
        }
        return res.status(401).send({ error: 'Unauthorized', message: 'Authentication failed (token) decoded sub.' })
    })
}

module.exports = authenticate
