'use-strict'

const place = (sq, type) => {
    return sq.define('place', {
        description: type.STRING,
        column: type.INTEGER,
        tidy: type.INTEGER,
        free: type.BOOLEAN
    }, { freezeTableName: true })
}

module.exports = { place }