const db = require('../models')
const result = require('../helpers/result')

const add = async (req, res) => {
    const model = await db.pricing.build(req.body)
    await model.save()
    await result.addResult(model, res)
}

const get = async (req, res) => {
    const model = await db.pricing.findAll()
    result.getResult(model, res)
}

const update = async (req, res) => {
    const model = await db.pricing.findByPk(req.params.id)
    result.updateResult(model, req.body, res)
}

const destroy = async (req, res) => {
    result.deleteResult(req, res, db.pricing)
}

module.exports = {
    add,
    get,
    update,
    destroy
}