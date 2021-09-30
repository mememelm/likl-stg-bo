const db = require('../models')
const result = require('../helpers/result')

const add = async (req, res) => {
    const model = await db.company.build(req.body)
    await model.save()
    await result.addResult(model, res)
}

const get = async (req, res) => {
    const model = await db.company.findAll({
        order: [['name', 'ASC']]
    })
    result.getResult(model, res)
}

const update = async (req, res) => {
    const model = await db.company.findByPk(req.params.id)
    result.updateResult(model, req.body, res)
}

const destroy = async (req, res) => {
    result.deleteResult(req, res, db.company)
}

module.exports = {
    add,
    get,
    update,
    destroy
}