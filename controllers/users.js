const express = require('express')
const router = express.Router();
const fetch = require('node-fetch');


router.get('/', (req, res) => {
    fetch('http://127.0.0.1:8000/nodeAPI/users')//https://hackersandslackers.com/making-api-requests-with-nodejs/
  .then(response => response.json())
  .then(data => {
      console.log("Data", data)
      data = JSON.stringify(data)  // Stringify it for now
      res.render('home', {data})
  })
  .catch(err => {
      console.log(err)
  })
})

module.exports = router
