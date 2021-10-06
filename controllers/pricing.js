const db = require('../models')
const result = require('../helpers/result')

const add = async (req, res) => {
    const model = await db.pricing.build(req.body)
    await model.save()
    await result.addResult(model, res)
}

const get = async (req, res) => {
    const model = await db.pricing.findAll({
        order: [['description', 'ASC']],
        include: [
            { model: db.company },
            { model: db.agency }
        ]
    })
    result.getResult(model, res)
}

const update = async (req, res) => {
    const model = await db.pricing.findByPk(req.params.id)
    result.updateResult(model, req.body, res)
}

const destroy = async (req, res) => {
    result.deleteResult(req, res, db.pricing)
}

const getByCompany = async (req, res) => {
    const model = await db.pricing.findAll({
        order: [['description', 'ASC']],
        where: { companyId: req.params.companyId }
    })
    result.getResult(model, res)
}

const getByAgency = async (req, res) => {
    const model = await db.pricing.findAll({
        order: [['description', 'ASC']],
        where: { agencyId: req.params.agencyId }
    })
    result.getResult(model, res)
}

module.exports = {
    add,
    get,
    update,
    destroy,
    getByCompany,
    getByAgency
}