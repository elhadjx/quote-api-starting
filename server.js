const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getElementById, getElementIndexById } = require('./utils');

const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`${req.method} Request Received`)
})

app.get('/api/quote/:id', (req, res, next) => {
    let ee = getElementById(req.params.id, quotes)
    if (ee) {
        res.status(200).send({quote: ee})
    } else {
        res.status(400).send()
    }
    
})

app.get('/api/quotes/random', (req, res, next) => {
    let ee = getRandomElement(quotes)
    res.status(200).send({quote: ee})
})

app.get('/api/quotes', (req, res, next) => {
    const person = req.params.person;
    let arr = [];
        quotes.forEach(element => {
            arr.push(element)
        });
        res.status(200).send({ quotes: arr })
    
})

app.post('/api/quotes', (req, res, next) => {
    let q1Q = req.params.quote;
    let q1P = req.params.person;
    if (q1Q && q1P ){
        let q1 = new Quote(q1Q, q1P)
        quotes.push(q1)
        res.status(200).send(q1)
    } else {
        res.status(400).send()
    }
})

app.put('/api/quote/:id', (req, res, next) => {
    const index = getElementIndexById(req.params.id, quotes)
    if(index) {
        if(req.query.quote){
            quotes[index].quote = req.query.quote;
        }
        if(req.query.person){
            quotes[index].person = req.query.person;
        }
        res.status(200).send(quotes[index])
    } else {
        res.status(400).send()
    }
})

app.delete('/api/quote/:id', (req, res, next) => {
    const index = getElementIndexById(req.params.id, quotes)
    if(index) {
        delete quotes[index];
        res.status(200).send('Resource deleted')
    } else {
        res.status(400).send()
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})