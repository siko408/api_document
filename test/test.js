require('dotenv').config()
const app = require('../server.js')
// const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
// const User = require('../models/user.js')
// const Message = require('../models/message.js')
chai.config.includeStack = true

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)


it('Should send all users names', (done) => {
        // TODO: Complete this

        chai.request(app)
        .get('/users')
        .end((error, response) => {
            response.should.have.status(200);
               if (error) done(error);
               expect(response.body).to.be.a('object')
               done();
           });
    })

it('Should  send all messages from all  Chats', (done) => {
    /// Basic testing for each route for now
    chai.request(app)
    .get('/totalmessages')
    .end((error, response) => {
        response.should.have.status(200);
           if (error) done(error);
           expect(response.body).to.be.a('object')
           done();
       });
})
