const db = require('../models')
const result = require('../helpers/result')

const add = async (req, res) => {
    const model = await db.vehicle.build(req.body)
    await model.save()
    await result.addResult(model, res)
}

const get = async (req, res) => {
    const model = await db.vehicle.findAll({
        order: [['registration', 'ASC']],
        include: [db.company]
    })
    result.getResult(model, res)
}

const update = async (req, res) => {
    const model = await db.vehicle.findByPk(req.params.id)
    result.updateResult(model, req.body, res)
}

const destroy = async (req, res) => {
    result.deleteResult(req, res, db.vehicle)
}

const getByCompany = async (req, res) => {
    const model = await db.vehicle.findAll({
        where: { companyId: req.params.companyId }
    })
    result.getResult(model, res)
}

module.exports = {
    add,
    get,
    update,
    destroy,
    getByCompany
}