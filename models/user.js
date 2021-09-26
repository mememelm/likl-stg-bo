'use-strict'

const user = (sq, type) => {
    return sq.define('user', {
        email: type.STRING,
        username: type.STRING,
        password: type.STRING,
        role: { type: type.ENUM, values: ['ADMIN', 'AGENCY', 'COMPANY'] },
        lastname: type.STRING,
        firstname: type.STRING,
        identity_card: type.STRING,
        phone: type.STRING,
        gender: { type: type.ENUM, values: ['M', 'F', 'O'] }
    }, { freezeTableName: true })
}

const userBelongsToAgency = (agency, user) => {
    agency.belongsTo(user, { onDelete: 'cascade' })
}

const userBelongsToCompany = (agency, company) => {
    agency.belongsTo(company, { onDelete: 'cascade' })
}

module.exports = {
    user,
    userBelongsToAgency,
    userBelongsToCompany
}