'use-strict'

const vehicle = (sq, type) => {
    return sq.define('vehicle', {
        registration: type.STRING,
        category: { type: type.ENUM, values: ['CLASSIC', 'PREMIUM', 'VIP'] },
        place: { type: type.ENUM, values: ['10', '16', '19'] },
        state: type.TINYINT,
        brand: type.STRING,
        model: type.STRING
    }, { freezeTableName: true })
}

const vehicleBelongsToCompany = (vehicle, company) => {
    vehicle.belongsTo(company, { onDelete: 'cascade' })
}

const vehicleHasManyPlaces = (vehicle, place) => {
    vehicle.hasMany(place, { onDelete: 'cascade' })
}

module.exports = {
    vehicle,
    vehicleBelongsToCompany,
    vehicleHasManyPlaces
}