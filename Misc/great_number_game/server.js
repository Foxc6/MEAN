const express = require("express")
const path = require("path")
const session = require("express-session")
const bodyParser = require("body-parser")

const app = express()

const PORT = 8000

app.use(session({secret: 'codingdojorocks'}))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "./static")))

app.set('views', path.join(__dirname, './static/views'))
app.set('view engine', 'ejs')


let message
if(!num){
	var num = Math.floor(Math.random() * 100) + 1
}

if(!game_over){
	var game_over = false
}

app.get('/', (req, res) => {
	message
	let messages = {
		correct: `${num} was the number!`,
		high: "Too high!",
		low: "Too low!"
	}
	messages
	game_over
	console.log(num)
	//console.log(message)
 res.render("index", {message: message, messages: messages, game_over: game_over})
})


// CREATE POST ROUTE FOR PROCESSING EACH GUESS. REDIRECT BACK TO ROOT ROUTE
app.post('/process', (req, res) => {
	let guess = req.body.guess
	//console.log(guess)
	let messages = {
		correct: `${num} was the number!`,
		high: "Too high!",
		low: "Too low!"
	}
	messages
	game_over

	if(guess == num){
		//console.log(messages.correct)
		message = messages.correct
		game_over = true
	}
	if(guess > num){
		//console.log(messages.high)
		message = messages.high
	}
	if(guess < num){
		//console.log(messages.low)
		message = messages.low
	}
	//console.log("PROCESS WORKS")
	res.redirect('/')
})

// CREATE POST ROUTE FOR PLAYING A NEW GAME. REDIRECT BACK TO ROOT ROUTE
app.post('/new', (req, res) => {
	num = Math.floor(Math.random() * 100) + 1;
	message = undefined
	game_over = false
	//console.log("NEW WORKS")
	res.redirect('/')
})



app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
})