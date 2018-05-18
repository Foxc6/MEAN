const path = require("path")

const players = require("./../controllers/players.js")

module.exports = app => {
	
	app.get("/allPlayers", players.getAll)
	app.post("/create", players.createPlayer)
	app.post("/delete", players.deletePlayer)
	app.post("/playinggameone", players.nowPlayingGameOne)
	app.post("/notplayinggameone", players.nowNotPlayingGameOne)
	app.post("/undecidedgameone", players.nowUndecidedGameOne)
	app.post("/playinggametwo", players.nowPlayingGameTwo)
	app.post("/notplayinggametwo", players.nowNotPlayingGameTwo)
	app.post("/undecidedgametwo", players.nowUndecidedGameTwo)
	app.post("/playinggamethree", players.nowPlayingGameThree)
	app.post("/notplayinggamethree", players.nowNotPlayingGameThree)
	app.post("/undecidedgamethree", players.nowUndecidedGameThree)
	app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))
}