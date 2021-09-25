'use-strict'

const user = (sq, type) => {
    return sq.define('user', {
        login: type.STRING,
        password: type.STRING,
        lastname: type.STRING,
        firstname: type.STRING,
        identity_card: type.STRING,
        phone: type.STRING,
        gender: type.STRING
    }, { freezeTableName: true })
}

module.exports = { user }