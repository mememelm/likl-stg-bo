'use-strict'

const itinerary = (sq, type) => {
    return sq.define('itinerary', {
        departure: type.STRING,
        arrival: type.STRING,
        price: type.INTEGER
    }, { freezeTableName: true })
}

const itineraryHasManyBookings = (itinerary, booking) => {
    itinerary.hasMany(booking)
}

module.exports = { 
    itinerary,
    itineraryHasManyBookings
 }