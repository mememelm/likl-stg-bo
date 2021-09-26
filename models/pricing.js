'use-strict'

const pricing = (sq, type) => {
    return sq.define('pricing', {
        description: type.STRING,
        price: type.INTEGER,
        unit: type.BOOLEAN
    }, { freezeTableName: true })
}

module.exports = { pricing }