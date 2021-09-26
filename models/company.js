'use-strict'

const company = (sq, type) => {
    return sq.define('company', {
        name: type.STRING,
        address: type.STRING,
        phone: type.STRING,
        is_active: type.BOOLEAN
    })
}

module.exports = { company }