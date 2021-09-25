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

module.exports = db
