var createError = require('http-errors')
const express = require('express')
var path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes')
const { errorParser } = require('./middlewares/error-parser')
const config = require('./bin/config')
const db = require('./models')

const app = express()
app.use(cors({
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

app.use(errorParser)
app.use(function (req, res, next) {
  next(createError(404))
})
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

app.listen(config.SERVER_PORT, () => {
  console.log('Express server listening on port ' + config.SERVER_PORT)
})

db.sq.sync({alter: true}).then(() => {
  console.log('sq done')
})

module.exports = app
