const express = require('express')
const router = express.Router();
const fetch = require('node-fetch');


router.get('/', (req, res) => {
    fetch('http://127.0.0.1:8000/nodeAPI/users')//https://hackersandslackers.com/making-api-requests-with-nodejs/
  .then(response => response.json())
  .then(data => {
      var sum = 0;
      for (key in data['rooms']){
          sum += data['rooms'][key][0]
      }
      data = sum // Change this once sum has  its own page
      res.render('home', {data})
  })
  .catch(err => {
      console.log(err)
  })
})

router.get('/:chatroomID/messages', (req, res) => {
    fetch('http://127.0.0.1:8000/nodeAPI/users')
  .then(response => response.json())
  .then(data => {
        var messages_list =  []
        for (message in data['rooms'][req.params.chatroomID][1]){
            messages_list.push(data['rooms'][req.params.chatroomID][1][message]['message'][0])
        }
     var chat_length = JSON.stringify(data["rooms"][req.params.chatroomID][0])  // Stringify it for now
     const chatroom_key = req.params.chatroomID
      res.render('chatroom_data', {chat_length, messages_list,  chatroom_key})
  })
  .catch(err => {
      console.log(err)
  })
})

module.exports = router
