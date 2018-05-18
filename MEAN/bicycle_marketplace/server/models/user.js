const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String,
}, {timestamps: true})

mongoose.model("User", UserSchema)