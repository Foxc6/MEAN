const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = {
	loginUser: (req, res) => {
		User.findOne({email: req.body.email})
			.then(user => {
				if(user.password == req.body.password){
					req.session.user_id = user._id
					console.log(req.session.user_id)
					// Redirect to Bike List page (Yet to be created)
					res.json(true)
				}
			})
			.catch(err => {
				console.log("User login error", err)
				res.status(500).json(err)
			})
	},

	registerUser: (req, res) => {
		console.log("Registering a new user")
		User.findOne({email: req.body.email})
			.then(user => {
				if(user){
					console.log("There is already a user")
					res.redirect('/login')
				} else {
				let user = new User(req.body)
		        console.log('new user in controller, prior to save', user)
		        user.save()
		    	}
	    	})
	            .then(user => {
	            	console.log(req.body.user._id)
	            	//req.session.user_id = req.body.user._id
	                res.json(true)
	            })
	            .catch(err => {
	                console.log("User create error", err)
	                res.status(500).json(err)
	            })
    }
}