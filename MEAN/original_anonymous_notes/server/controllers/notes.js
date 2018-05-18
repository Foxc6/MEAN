const mongoose = require("mongoose")
const Note = mongoose.model("Note")


module.exports = {
	addNote: (req, res) => {
		Note.findOne({content: req.body.content})
			.then(note => {
				if(note){
					res.json(true)
				} else {
					let new_note = new Note(req.body)

					new_note.save()
						.then(() => {
							res.json(true)
						})
						.catch(err => {
							console.log("Note save error", err)
							res.status(500).json(err)
						})
				}
			})

		
	},

	allNotes: (req, res) => {
		Note.find({})
			.then(notes => res.json(notes))
			.catch(err => {
				console.log("Note.find error", err)
				res.status(500).json(err)
			})
	}
	
}