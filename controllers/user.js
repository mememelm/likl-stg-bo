const { pool } = require('../bin/database')
const db = require('../models')
const { Op } = require('sequelize')

const ifUserExist = async (req, res) => {
    const user = await db.user.findAll({
        where: {
            [Op.or]: [
                { username: { [Op.eq]: req.query.username } },
                { email: { [Op.eq]: req.query.email } }
            ]
        }
    })
    return res.status(200).send(user)
}

const currentUser = (userId, result) => {
    pool.getConnection((err, connection) => {
        let query = "Select * from user where id = ?"
        connection.query(query, userId, (err, res) => {
            if (err) {
                result(err, null)
            } else {
                result(null, res[0])
            }
        })
    })
}

module.exports = {
    currentUser,
    ifUserExist
}