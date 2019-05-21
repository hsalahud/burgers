const express = require('express')
const {join} = require('path')
// const { createConnection } = require('mysql2')
const app = express()
const {render} = require

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', '.hbs')

require('./routes')(app)

// require('./config/connection.js').sync()
//   .then(_ => app.listen(3000))
//   .catch(e => console.error(e))

require('./config/connection').connect(_ => { app.listen(3000) })
