'use-strict'

const agency = (sq, type) => {
    return sq.define('agency', {
        name: type.STRING,
        address: type.STRING
    }, { freezeTableName: true })
}

const agencyHasManyCompanies = (agency, company) => {
    agency.hasMany(company, { onDelete: 'cascade' })
}

module.exports = {
    agency,
    agencyHasManyCompanies
}