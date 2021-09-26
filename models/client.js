'use-strict'

const client = (sq, type) => {
    return sq.define('client', {
        firstname: type.STRING,
        lastname: type.STRING,
        checked: type.BOOLEAN,
        type_identify: { type: type.ENUM, values: ['PP', 'CIN', 'OTHER'] }
    }, { freezeTableName: true })
}

module.exports = { client }