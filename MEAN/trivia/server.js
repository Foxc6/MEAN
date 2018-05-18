const express = require("express")
const path = require("path")

const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")

const PORT = 8000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./client/dist")))

app.use(session({
     secret: "secret",
     resave: false,
     saveUninitialized: true
}))

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

app.listen(PORT, () => {
     console.log(`Listening on port 8000`)
})