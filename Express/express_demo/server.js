const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
	let person = {name: "Chris", age: 32}
	let cool_numbers = [420, 69, 13]

	res.render("index", {person, cool_numbers})
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})