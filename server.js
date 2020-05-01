const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');

// Set App Variable
const app = express()

// Use Body Parser
app.use(expressValidator());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use((req, res, next) => {
    const now = new Date().toString()
    console.log(`Requested ${req.url} at ${now}`)
    next()
})

// Database Setup
// require('./config/db-setup.js')

// Routes
const router = require('./controllers/index.js') // I only need to require one since the index will contain all other routes
app.use(router)

// Start Server
app.listen(3000, () => {
  console.log('connection successful')
})

module.exports = app
