require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('build'))
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

// app.get('/info', (req, res) => {
//     res.send(
//         `
//         <p>Phonebook has info for ${persons.length} people</p>
//         <p>${new Date()}</p>
//         `
//     )
// })


app.get('/api/persons',(req,res)=>{
    Person.find({}).then(result =>{
        console.log(result)
        res.json(result);
    })
});

app.post('/api/persons',(req,res)=>{
    const person=req.body;

    
    if (!person.name) {
        return res.status(400).json({ 
            error: 'name missing' 
        })
    }
    
    if (!person.number) {
        return res.status(400).json({ 
            error: 'number missing' 
        })
    }
    
    if (persons.find(data=>data.name===person.name)) {
        return res.status(400).json({ 
            error: 'name already exists' 
        })
    }

    const id=Math.floor(Math.random() * 100); 
    person.id=id;
    persons=persons.concat(person);
    res.json(persons);
});

app.get('/api/persons/:id',(req,res)=>{
    const id=+req.params.id;
    const person=persons.find(person => person.id === id);

    if(person){
        res.json(person);
    } else{
        res.status(404).end();
    }
});

app.delete('/api/persons/:id',(req,res)=>{
    const id=+req.params.id;
    persons=persons.filter(person => person.id !== id);
    res.status(204).end()
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, '0.0.0.0');