'use-strict'

const vehicle = (sq, type) => {
    return sq.define('vehicle', {
        registration: type.STRING,
        type: type.STRING,
        place: type.INTEGER
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