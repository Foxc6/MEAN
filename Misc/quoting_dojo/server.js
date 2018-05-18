const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/quoting_dojo')

var QuoteSchema = new mongoose.Schema({
 author: String,
 content: String,
 date: Date
})
mongoose.model('Quote', QuoteSchema)
var Quote = mongoose.model('Quote')

const path = require('path')

app.use(express.static(path.join(__dirname, './static/views')))
app.set('views', path.join(__dirname, './static/views'))
app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
  res.render('welcome')
})

app.post('/process', (req, res)=>{
  console.log("POST DATA", req.body);
  var quote = new Quote({author: req.body.author, content: req.body.content, date: new Date});
  quote.save((err)=>{
    if(err) {
      console.log('something went wrong');
    } else {
    	console.log('successfully added a quote!');
      res.redirect('/index');
    }
  })
})

app.post('/skip', (req, res)=>{
  res.redirect('/index')
})

app.post('/go_home', (req, res)=>{
  res.redirect('/')
})

app.get('/index', (req, res)=>{
  Quote.find({}, null, {sort: {date: -1}}, (err, quotes)=>{
    if(err){
      console.log("Error with processing a list of quotes!")
    } else {
      res.render('index', {quotes: quotes})
    }
  })
})

app.listen(8000, ()=>{
    console.log("listening on port 8000")
})