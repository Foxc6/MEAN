const mongoose = require("mongoose")
const Player = mongoose.model("Player")

module.exports = {
	createPlayer: (req, res) => {
		Player.findOne({name: req.body.name})
			.then(player => {
				let new_player = new Player(req.body)
				new_player.gameOneStatus = 3
				new_player.gameTwoStatus = 3
				new_player.gameThreeStatus = 3
				new_player.save()
					.then(() => {
						res.json(true)
					})
					.catch(err => {
						console.log("Player save error", err)
						res.status(500).json(err)
					})
			})

		
	},

	getAll: (req, res) => {
		Player.find({})
			.then(players => res.json(players))
			.catch(err => {
				console.log("Player find all error", err)
				res.status(500).json(err)
			})
	},

	deletePlayer: (req, res) => {
		console.log("The deletePlayer method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		var _id = req.body.id
		Player.remove({_id: _id})
	        .then(res.json(true))
	        .catch(err => {
	        	console.log("Player delete all error", err)
				res.status(500).json(err)
	        })
	},

	nowPlayingGameOne: (req, res) => {
		console.log("The nowPlaying method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {gameOneStatus: status}, (err,player) => {
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
	},

	nowNotPlayingGameOne: (req, res) => {
		console.log("The nowNotPlaying method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {gameOneStatus: status}, (err,player) => {
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
	},

	nowUndecidedGameOne: (req, res) => {
		console.log("The nowUndecided method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {gameOneStatus: status}, (err,player) => {
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
	},

	nowPlayingGameTwo: (req, res) => {
		console.log("The nowPlaying method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {gameTwoStatus: status}, (err,player) => {
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
	},

	nowNotPlayingGameTwo: (req, res) => {
		console.log("The nowNotPlaying method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {gameTwoStatus: status}, (err,player) => {
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
	},

	nowUndecidedGameTwo: (req, res) => {
		console.log("The nowUndecided method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {gameTwoStatus: status}, (err,player) => {
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
	},

	nowPlayingGameThree: (req, res) => {
		console.log("The nowPlaying method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {gameThreeStatus: status}, (err,player) => {
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
	},

	nowNotPlayingGameThree: (req, res) => {
		console.log("The nowNotPlaying method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {gameThreeStatus: status}, (err,player) => {
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
	},

	nowUndecidedGameThree: (req, res) => {
		console.log("The nowUndecided method in the Controller is being hit. Player _id being passed is: ", req.body.id)
		let id = req.body.id
        let status = req.body.status
        console.log('status got to controler', status)
        Player.update({_id: id}, {gameThreeStatus: status}, (err,player) => {
            if(err){
                console.log('Update status error in controller', err)
            } else {
                console.log('player status updated at controller')
                res.json(true)
            }
        })
	}
}