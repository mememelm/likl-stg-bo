'use-strict'

const luggage = (sq, type) => {
    return sq.define('luggage', {
        description: type.STRING,
        quantity: type.INTEGER,
        total_weight: type.INTEGER
    }, { freezeTableName: true })
}

const luggageBelongsToClient = (luggage, client) => {
    luggage.belongsTo(client)
}

const luggageBelongsToTransport = (luggage, transport) => {
    luggage.belongsTo(transport)
}

module.exports = {
    luggage,
    luggageBelongsToClient,
    luggageBelongsToTransport
}