'use-strict'

const company = (sq, type) => {
    return sq.define('company', {
        name: type.STRING,
        address: type.STRING,
        phone: type.STRING,
        is_active: type.BOOLEAN
    })
}

const companyHasManyPricing = (company, pricing) => {
    company.hasMany(pricing, { onDelete: 'cascade' })
}

const companyHasManyItinerary = (company, itinerary) => {
    company.hasMany(itinerary, { onDelete: 'cascade' })
}

module.exports = {
    company,
    companyHasManyPricing,
    companyHasManyItinerary
}