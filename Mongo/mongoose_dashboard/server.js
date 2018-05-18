const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/mongoose_dashboard')

var AnimalSchema = new mongoose.Schema({
 name: String,
 num_legs: Number,
 animal_type: String, //Mamal, Reptile, etc
 age: Number,
 created_at: Date,
 updated_at: Date
})
mongoose.model('Animal', AnimalSchema)
var Animal = mongoose.model('Animal')

const path = require('path')

app.use(express.static(path.join(__dirname, './static/views')))
app.set('views', path.join(__dirname, './static/views'))
app.set('view engine', 'ejs')


// GET METHOD FOR INDEX PAGE (ALSO LANDING PAGE)
app.get('/', (req, res)=>{
  Animal.find({}, (err, animals)=>{
    if(err){
      console.log("Error with processing a list of animals!")
    } else {
      res.render('index', {animals: animals})
    }
  })
})

// GET METHOD FOR NEW PAGE
app.get('/new', (req, res)=>{
  res.render('new')
})


// POST METHOD FOR ADDING NEW ANIMAL TO DATABASE
app.post('/add_animal', (req, res)=>{
  console.log("POST DATA", req.body)
  var animal = new Animal({
    name: req.body.name, 
    num_legs: req.body.num_legs, 
    animal_type: req.body.animal_type, 
    age: req.body.age, 
    created_at: new Date,
    updated_at: new Date
  })
  animal.save((err)=>{
    if(err) {
      console.log('something went wrong')
    } else {
      console.log('successfully added an animal!')
      res.redirect('/')
    }
  })
})

// BUTTON THAT REDIRECTS FROM CREATE PAGE TO INDEX PAGE
app.post('/to_show_animals', (req, res)=>{
  res.redirect('/')
})

// BUTTON THAT REDIRECTS FROM INDEX PAGE TO CREATE PAGE
app.post('/to_new_animal', (req, res)=>{
  res.redirect('/new')
})


// GET METHOD FOR EDIT PAGE

app.get('/edit/:id', (req, res)=>{
  Animal.findOne({_id: req.params.id}, (err, animal)=>{
    res.render('edit', {animal: animal})
  })
})

// GET METHOD FOR SHOW PAGE
app.get('/show/:id', (req, res)=>{
  Animal.findOne({_id: req.params.id}, (err, animal)=>{
    res.render('show', {animal: animal})
  })
})

// POST METHOD FOR EDITING AN EXISTING ANIMAL
app.post('/edit_animal/:id', (req, res)=>{
  console.log("Updating Animal " + req.params.id)
  Animal.findOne({_id: req.params.id}, (err, animal)=>{
    if(err) {
      console.log('something went wrong');
    } else { 
      animal.name = req.body.name, 
      animal.num_legs = req.body.num_legs, 
      animal.animal_type = req.body.animal_type, 
      animal.age = req.body.age, 
      animal.updated_at = new Date
      console.log('successfully updated an animal!')
            animal.save((err, animal)=>{
            if(err) {
                console.log('something went wrong')
            } else {
                console.log('successfully updated a animal!')
            }
        })
            res.redirect('/')
    }
  })

})

// POST METHOD FOR DELETING AN EXISTING ANIMAL
app.post('/destroy/:id', (req, res)=>{
  console.log("removing animal" + req.params.id);
    Animal.remove({_id: req.params.id}, (err, animal)=>{
        // if there is an error console.log that something went wrong!
        if(err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully deleted an animal!');
            res.redirect('/');
        }
    });
})

app.listen(8000, ()=>{
    console.log("listening on port 8000")
})