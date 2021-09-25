const { pool } = require('../bin/database')

const currentUser = (userId, result) => {
    pool.getConnection((err, connection) => {
        let query = "Select * from users where id = ?"
        connection.query(query, userId, (err, res) => {
            if (err) {
                result(err, null)
            } else {
                result(null, res[0])
            }
        })
    })
}

module.exports = { currentUser }