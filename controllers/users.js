const express = require('express')
const router = express.Router();
const fetch = require('node-fetch');
const User = require('../models/user');


router.get('/', (req, res) => {
    User.findById(req.user._id).lean()
                .then(user => {
                    var currentUser = user.username
                    console.log("This is the user", currentUser)
                    fetch('http://127.0.0.1:8000/nodeAPI/users')//https://hackersandslackers.com/making-api-requests-with-nodejs/
                  .then(response => response.json())
                  .then(data => {
                      console.log("Data", data)
                      data = JSON.stringify(data['users'])  // Stringify it for now
                      res.render('home', {data, currentUser})
                  })
                  .catch(err => {
                      console.log(err)
                  })

                })
                .catch(err => {
                    console.log(err.message);
                })

})

router.get('/searchbar', (req, res) => {
        res.render('searchBar')
})
router.post('/getuser', (req, res) => {
    console.log("This is what we are sending", req.body['input'])
    fetch('http://127.0.0.1:8000/nodeAPI/userSearch', { // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
        user: req.body['input'],
    }),

    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    } })
  .then(data => data.json())
  .then(json => {
      data = JSON.stringify(json)  // Stringify it for now
     res.json(data)
  });



})

module.exports = router
