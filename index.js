const express = require('express');
const cors = require('cors');
const spacialOfferData = require('./data/spacial-offer.json')
const roomSuites = require('./data/rooom-Suites.json')
const article = require('./data/article.json')
const app = express();
const port = process.env.PORT || 7000;


// middleware
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('this server is running ')
})

app.get('/spacial', (req, res) =>{
    res.send(spacialOfferData)
})

app.get('/suites', (req, res) =>{
    res.send(roomSuites)
})

app.get('/article', (req, res) =>{
    res.send(article)
})

app.listen(port)