const db = require('../models')
const result = require('../helpers/result')

const add = async (req, res) => {
    const model = await db.agency.build(req.body)
    await model.save()
    await result.addResult(model, res)
}

const get = async (req, res) => {
    const model = await db.agency.findAll({
        order: [['id', 'DESC']],
        include: [db.company]
    })
    result.getResult(model, res)
}

const update = async (req, res) => {
    const model = await db.agency.findByPk(req.params.id)
    result.updateResult(model, req.body, res)
}

const destroy = async (req, res) => {
    result.deleteResult(req, res, db.agency)
}

const getById = async (req, res) => {
    result.getByIdResult(req, res, db.agency)
}

module.exports = {
    add,
    get,
    update,
    destroy,
    getById
}