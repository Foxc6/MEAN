const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

const PORT = 8000

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("index")
})

app.get("/show", (req, res) => {
	res.render("show")
})

app.post("/result", (req, res) => {
	request = {
		name: req.body.name,
		location: req.body.location,
		language: req.body.language,
		comment: req.body.comment
	}
	//console.log("POST DATA \n\n", req.body)
	res.redirect("/show")
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})