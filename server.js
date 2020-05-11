require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
// Set App Variable
const app = express()
app.use(cookieParser()); // Add this after you initialize express.

// Use Body Parser
app.use(expressValidator());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
    console.log("No User", req.user)
  } else {
      console.log("USER CONNECTED", req.user)
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);
app.use(express.static('public'));

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
require('./data/reddit-db');
const router = require('./controllers/index.js') // I only need to require one since the index will contain all other routes
app.use(router)

app.get('/', (req, res) => {
    var currentUser = req.user;
    res.render('homePage', {currentUser})
})


// Start Server
app.listen(3000, () => {
  console.log('connection successful')
})

module.exports = app
