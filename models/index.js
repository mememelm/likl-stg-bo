require("dotenv").config()
const SQ = require('sequelize').Sequelize

const sequelize = new SQ(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_READ_HOST,
    dialect: 'mysql',
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
})

const db = {}
db.type = SQ
db.sq = sequelize

db.user = require('./user').user(sequelize, SQ)
db.agency = require('./agency').agency(sequelize, SQ)
db.company = require('./company').company(sequelize, SQ)
db.vehicle = require('./vehicle').vehicle(sequelize, SQ)
db.itinerary = require('./itinerary').itinerary(sequelize, SQ)
db.pricing = require('./pricing').pricing(sequelize, SQ)
db.place = require('./place').place(sequelize, SQ)
db.booking = require('./booking').booking(sequelize, SQ)
db.client = require('./client').client(sequelize, SQ)
db.transport = require('./transport').transport(sequelize, SQ)
db.luggage = require('./luggage').luggage(sequelize, SQ)
db.package = require('./package').package(sequelize, SQ)

const { userBelongsToAgency, userBelongsToCompany } = require('./user')
userBelongsToAgency(db.user, db.agency)
userBelongsToCompany(db.user, db.company)

const { agencyHasManyCompanies } = require('./agency')
agencyHasManyCompanies(db.agency, db.company)

const { companyHasManyPricing, companyHasManyItinerary } = require('./company')
companyHasManyPricing(db.company, db.pricing)
companyHasManyItinerary(db.company, db.itinerary)

const { vehicleBelongsToCompany, vehicleHasManyPlaces } = require('./vehicle')
vehicleBelongsToCompany(db.vehicle, db.company)
vehicleHasManyPlaces(db.vehicle, db.place)

const { bookingBelongsToClient } = require('./booking')
bookingBelongsToClient(db.booking, db.client)

const { itineraryHasManyBookings } = require('./itinerary')
itineraryHasManyBookings(db.itinerary, db.booking)

const { luggageBelongsToClient, luggageBelongsToTransport } = require('./luggage')
luggageBelongsToClient(db.luggage, db.client)
luggageBelongsToTransport(db.luggage, db.transport)

const { transportBelongsToVehicle, transportHasManyClients } = require('./transport')
transportBelongsToVehicle(db.transport, db.vehicle)
transportHasManyClients(db.transport, db.client)

const { packageBelongsToTransport, packageBelongsToCompany } = require('./package')
packageBelongsToTransport(db.package, db.transport)
packageBelongsToCompany(db.package, db.company)

module.exports = db
