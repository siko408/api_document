require('dotenv').config()
const app = require('./server.js')
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


// after((done) => {
//   // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
//   mongoose.models = {}
//   mongoose.modelSchemas = {}
//   mongoose.connection.close()
//   done()
// })
// const SAMPLE_OBJECT_ID = 'aaaaaaaaaaaa' // 12 byte string
// const SAMPLE_OBJECT_ID_2 = 'aaaaaaaaaaaa' // 12 byte string

it('Should check all users', (done) => {
        // TODO: Complete this

        chai.request(app)
        .get('/users')
        .end((error, response) => {
            response.should.have.status(200);
               if (error) done(error);
               expect(response.body).to.be.deep.equal({
                   message:'200'
               });
               done();
           });
    })
