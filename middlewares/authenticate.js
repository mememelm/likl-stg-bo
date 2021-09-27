const jwt = require('jsonwebtoken')
const config = require('../bin/config')
const user = require('../controllers/user')

const authenticate = (req, res, next) => {
    const authorization = req.headers['authorization']
    if (authorization) {
        const token = authorization.replace('Bearer ', '')
        try {
            const decode = jwt.verify(token, config.JWT_SECRET)
            if (decode) {
                return user.currentUser(decode.sub, (err, user) => {
                    if (!err && user) {
                        req.user = user
                        return next()
                    }
                    return res.status(401).send({ error: 'Unauthorized', message: 'Authentication failed (token). authorization' })
                })
            }
        } catch (error) { }
    }
    return res.status(401).send({ error: 'Unauthorized', message: 'Authentication failed (token). authorization' })
}

module.exports = authenticate
