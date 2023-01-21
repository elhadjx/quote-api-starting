const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
    res.send(getRandomElement(quotes))
})

app.get('/api/quotes', (req, res, next) => {

    const person = req.params.person;
    if (person) {
        let arr = [];
        quotes.forEach(element => {
            if (element.person == person ){
                arr.push(element)
            }
        });
        res.send(arr)
    } else {
        res.send(quotes)
    }
    
})

app.post('/api/quotes', (req, res, next) => {
    let q1Q = req.params.quote;
    let q1P = req.params.person;
    if (q1Q && q1P ){
        let q1 = new Quote(q1Q, q1P)
        quotes.push(q1)
        res.send(q1)
    } else {
        res.status(400).send()
    }
})