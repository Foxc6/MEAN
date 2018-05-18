const path = require("path")

// Add additional controllers as needed
//const {{controller-name}} = require("./../controllers/{{controller-name}}.js")

module.exports = app => {
	
	//Routes here

	
	app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}