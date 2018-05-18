const express = require('express')
const path = require('path')

const app = express()
const bodyParser = require('body-parser')

const PORT = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, './static/views')))

app.set('views', path.join(__dirname, './static/views'))
app.set('view engine', 'ejs')
// Mongoose reference must come before routes reference below
require('./server/config/mongoose')
// routes reference must come after mongoose reference above
require("./server/config/routes.js")(app)

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})