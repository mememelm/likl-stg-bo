'use-strict'

const user = (sq, type) => {
    return sq.define('user', {
        email: type.STRING,
        username: type.STRING,
        password: type.STRING,
        role: { type: type.ENUM, values: ['ADMIN', 'SUPER_USER', 'USER'] },
        lastname: type.STRING,
        firstname: type.STRING,
        identity_card: type.STRING,
        phone: type.STRING,
        gender: { type: type.ENUM, values: ['M', 'F'] }
    }, { freezeTableName: true })
}

module.exports = { user }