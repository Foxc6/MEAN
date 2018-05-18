const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/basic_mongoose')

var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})
mongoose.model('User', UserSchema)
var User = mongoose.model('User')


const path = require('path')

app.use(express.static(path.join(__dirname, './static/views')))
app.set('views', path.join(__dirname, './static/views'))
app.set('view engine', 'ejs')


app.get('/', function(req, res) {
	User.find({}, function(err, users) {
		if(err){
			console.log("You done fucked up, son!")
		} else {
			res.render('index', {users: users})
		}
	})
})

app.post('/users', function(req, res) {
  console.log("POST DATA", req.body);
  var user = new User({name: req.body.name, age: req.body.age});
  user.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else {
    	console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})

app.listen(8000, function() {
    console.log("listening on port 8000")
})