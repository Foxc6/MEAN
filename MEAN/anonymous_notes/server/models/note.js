const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
	content: String,
}, {timestamps: true})

mongoose.model("Note", NoteSchema)