'use-strict'

const transport = (sq, type) => {
    return sq.define('transport', {
        description: type.STRING,
        departure_date: type.DATE,
        time: { type: type.ENUM, values: ['m', 's'] }
    }, { freezeTableName: true })
}

const transportBelongsToVehicle = (transport, vehicle) => {
    transport.belongsTo(vehicle)
}

const transportHasManyClients = (transport, client) => {
    transport.hasMany(client)
}

module.exports = {
    transport,
    transportBelongsToVehicle,
    transportHasManyClients
}