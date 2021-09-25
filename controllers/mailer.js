const { sendMail } = require("../middlewares/mailer")

const send = async (req, res) => {
    sendMail(req.body.to, req.body.subject, req.body.html)
        .then(() => {
            return res.status(200).send({ message: 'mail_send' })
        }).catch((err) => {
            return res.status(500).send({ message: 'mail_error', error: err })
        })
}

module.exports = { send }