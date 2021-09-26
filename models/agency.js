'use-strict'

const agency = (sq, type) => {
    return sq.define('agency', {
        name: type.STRING,
        address: type.STRING
    }, { freezeTableName: true })
}

const agencyHasManyCompany = (agency, company) => {
    agency.hasMany(company, { onDelete: 'cascade' })
}

module.exports = { agency, agencyHasManyCompany }