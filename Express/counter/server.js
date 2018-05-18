const express = require("express")
const path = require("path")
const session = require('express-session')

const app = express()

const PORT = 8000

app.use(session({secret: 'codingdojorocks'}))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
	if(!req.session.counter){
		req.session.counter = 1
	} else {
		req.session.counter ++
	}
	console.log(req.session.counter)
	res.render("index", {session: req.session.counter})
})

app.get("/two", (req, res) => {
	req.session.counter += 1
	res.redirect("/")
})

app.get("/reset", (req, res) => {
	req.session.counter = 0
	res.redirect("/")
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})