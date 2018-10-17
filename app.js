const express = require('express') 
const app = express()
const path = require('path') 
const bodyParser = require('body-parser')
const helmet = require('helmet')

app.use(bodyParser.json())  
app.use(bodyParser.urlencoded({ extended: false }))

// secure apps by setting various HTTP headers
app.use(helmet())

// STATIC FILE
const website = path.join(__dirname, '/public/index.html')
app.use('/', express.static(path.join(__dirname, '/public/')))

// Secret Path
app.get('/beastmode', (req, res, next) => res.send('<br /><br /> <h1 align="center">Site Coded by Reggie</h1>'))

// basic route setup
app.get('/', (req, res) => res.sendFile(website))
app.get('/products', (req, res) => res.sendFile(website))
app.get('/info', (req, res) => res.sendFile(website))
app.get('/contact', (req, res) => res.sendFile(website))

// Default every route except the above to serve to redirect to homepage
app.get('*', (req, res) => res.redirect('/'))

module.exports = app