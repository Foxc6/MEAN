const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))

const path = require('path')

mongoose.connect('mongodb://localhost/message_board', {useMongoClient: true})

//MODELS HERE
var Schema = mongoose.Schema;
// define Message Schema
var MessageSchema = new mongoose.Schema({
  name: {type: String, required: true },
  content: {type: String, required: true }, 
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
  name: {type: String, required: true },
  message: {type: Schema.Types.ObjectId, ref: 'Message'},
  content: {type: String, required: true }
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

app.use(express.static(path.join(__dirname, './static/views')))
app.set('views', path.join(__dirname, './static/views'))
app.set('view engine', 'ejs')


// GET METHOD FOR INDEX PAGE
app.get('/', (req, res)=>{
  Message.find({}, (err, messages)=>{
    if(err){
      console.log("Error with processing a list of messages!")
    } else {
      res.render('index', {messages: messages})
    }
  })
})

// POST METHOD FOR CREATING A MESSAGE
app.post('/create_message', (req, res)=>{
  console.log("POST DATA", req.body)
  var message = new Message({
    name: req.body.name,
    content: req.body.content
  })
  message.save((err)=>{
    if(err) {
      console.log('something went wrong')
    } else {
      console.log('successfully added a message!')
      res.redirect('/')
    }
  })
})

// POST METHOD FOR CREATING A COMMENT



app.listen(8000, ()=>{
    console.log("listening on port 8000")
})