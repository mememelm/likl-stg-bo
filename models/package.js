'use-strict'

const package = (sq, type) => {
    return sq.define('package', {
        description: type.STRING,
        type: { type: type.ENUM, values: ['MULTI', 'LETTRE', 'CARTON', 'SAC'] },
        departure_date: type.DATE,
        departure_location: type.STRING,
        arrival: type.STRING,
        quantity: type.STRING,
        price: type.INTEGER,
        advance_price: type.INTEGER,
        sender_firstname: type.STRING,
        sender_lastname: type.STRING,
        receiver_firstname: type.STRING,
        receiver_lastname: type.STRING,
        receiver_identifying: type.STRING
    }, { freezeTableName: true })
}

const packageBelongsToTransport = (package, transport) => {
    package.belongsTo(transport)
}

const packageBelongsToCompany = (package, company) => {
    package.belongsTo(company)
}

module.exports = {
    package,
    packageBelongsToTransport,
    packageBelongsToCompany
}