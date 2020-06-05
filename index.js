require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static('build'))
app.use(express.json());
const cors = require('cors')
app.use(cors())

const Person=require('./models/person')

var morgan = require('morgan')

app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
    ].join(' ') + ' '+ JSON.stringify(req.body)
  }));


// let persons=[
//       {
//         "name": "Arto Hellas",
//         "number": "o23502350",
//         "id": 1
//       },
//       {
//         "name": "Ada Lovelace",
//         "number": "39-44-5323523",
//         "id": 2
//       },
//       {
//         "name": "Dan Abramov",
//         "number": "12-43-234345",
//         "id": 3
//       },
//       {
//         "name": "Mary Poppendieck",
//         "number": "39-23-6423122",
//         "id": 4
//       }
//     ];


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
    Person.find({}).then(result =>{
        res.send(
            `
            <p>Phonebook has info for ${result.length} people</p>
            <p>${new Date()}</p>
            `
        )
    })

})


app.get('/api/persons',(req,res)=>{
    Person.find({}).then(result =>{
        console.log(result)
        res.json(result);
    })
});

app.post('/api/persons',(req,res, next)=>{
    const person=req.body;

    const personDb=new Person({
        name:person.name,
        number:person.number
    });

    personDb.save().then(savedPerson =>{
        res.json(savedPerson.toJSON());
    })
    .catch(error => next(error))
});

app.get('/api/persons/:id',(req,res,next)=>{
    const id=req.params.id;
    Person.findById(id)
        .then(person=>{
            if(person){
                res.json(person)
            } else{
                res.status(404).end()
            }
        })
        .catch(error => {
            next(error);
        })
});

app.put('/api/persons/:id',(req,res,next)=>{
    const number=req.body.number;
    Person.findByIdAndUpdate(req.param.id,{number:number},{ new: true })
    .then(updatedPerson => {
        res.json(updatedPerson)
      })
    .catch(error => next(error))
})

app.delete('/api/persons/:id',(req,res, next)=>{
    Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
});


const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
    }
  
    next(error)
  }
  
  app.use(errorHandler)

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0');