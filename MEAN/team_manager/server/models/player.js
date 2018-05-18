const mongoose = require("mongoose")

const PlayerSchema = mongoose.Schema({
	name: String,
	position: String,
	gameOneStatus: Number,
	gameTwoStatus: Number,
	gameThreeStatus: Number,
}, {timestamps: true})

mongoose.model("Player", PlayerSchema)