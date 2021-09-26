'use-strict'

const category = (sq, type) => {
    return sq.define('category', {
        description: type.STRING
    }, { freezeTableName: true })
}

module.exports = {
    category
}