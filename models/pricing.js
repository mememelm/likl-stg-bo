'use-strict'

const pricing = (sq, type) => {
    return sq.define('pricing', {
        description: type.STRING,
        increased_price: type.INTEGER
    }, { freezeTableName: true })
}

const pricingBelongsToCompany = (price, company) => {
    price.belongsTo(company)
}

const pricingBelongsToAgency = (price, agency) => {
    price.belongsTo(agency)
}

module.exports = {
    pricing,
    pricingBelongsToCompany,
    pricingBelongsToAgency
}