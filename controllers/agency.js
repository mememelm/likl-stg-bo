const db = require('../models')
const result = require('../helpers/result')

const add = async (req, res) => {
    const agency = await db.agency.build(req.body)
    await agency.save()
    await result.addResult(agency, res)
}

const get = async (req, res) => {
    const agency = await db.agency.findAll({
        order: [['id', 'DESC']],
        include: [db.company]
    })
    result.getResult(agency, res)
}

const update = async (req, res) => {
    const agency = await db.agency.findByPk(req.params.id)
    result.updateResult(agency, req.body, res)
}

const destroy = async (req, res) => {
    result.deleteResult(req, res, db.agency)
}

module.exports = {
    add,
    get,
    update,
    destroy
}