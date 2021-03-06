'use-strict'

const addResult = async (model, res) => {
    const result = await model.reload()
    try {
        if (result) return res.status(200).send(model)
        else return res.status(203).send('error')
    } catch (error) {
        return res.status(400).send(error)
    }
}

const getResult = (model, res) => {
    try {
        if (model) return res.status(200).send(model)
        else return res.status(203).send('no_data_found')
    } catch (error) {
        return res.status(400).send(error)
    }
}

const updateResult = (model, body, res) => {
    try {
        if (!model) return res.status(203).json({ message: 'id_not_found' })
        else {
            model.update(body)
            return res.status(200).send(model)
        }
    } catch (error) {
        return res.status(400).send(error)
    }
}

const deleteResult = async (req, res, model) => {
    try {
        if (req.params.id) {
            const element = await model.destroy({ where: { id: req.params.id } })
            if (element) return res.status(200).json({ message: 'success' })
            else return res.status(203).json({ message: 'id_not_found' })
        }
    } catch (error) {
        return res.status(400).send(error)
    }
}

const getByIdResult = async (req, res, model) => {
    const element = await model.findByPk(req.params.id)
    if (element) return res.status(200).send(element)
    else return res.status(203).send('no_data_found')
}

module.exports = {
    addResult,
    getResult,
    updateResult,
    deleteResult,
    getByIdResult
}