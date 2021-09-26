'use-strict'

const booking = (sq, type) => {
    return sq.define('booking', {
        place_number: type.INTEGER,
        place_selected: type.STRING,
        price: type.INTEGER,
        state: type.TINYINT,
    }, { freezeTableName: true })
}

const bookingBelongsToClient = (booking, client) => {
    booking.belongsTo(client)
}

const bookingHasManyLuggages = (booking, luggage) => {
    booking.hasMany(luggage)
}

module.exports = {
    booking,
    bookingBelongsToClient,
    bookingHasManyLuggages
}