const path = require("path")

const notes = require("./../controllers/notes.js")

module.exports = app => {
	app.post("/addNote", notes.addNote)
	app.get("/allNotes", notes.allNotes)

	app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}