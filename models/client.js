'use-strict'

const client = (sq, type) => {
    return sq.define('client', {
        firstname: type.STRING,
        lastname: type.STRING,
        checked: type.BOOLEAN,
        type_identify: { type: type.ENUM, values: ['pp', 'ic', 'others'] }
    }, { freezeTableName: true })
}

module.exports = { client }