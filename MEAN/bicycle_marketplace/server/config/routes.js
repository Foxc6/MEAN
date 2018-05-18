const path = require("path")

// Add additional controllers as needed
const users = require("./../controllers/users.js")

module.exports = app => {
	
	//Routes here
	app.post('/login', users.loginUser)
	app.post('/register', users.registerUser)

	
	app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}