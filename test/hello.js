process.env.NODE_ENV = 'TEST';

const request = require('request');
const should = require('should');
const mocha = require('mocha');

describe('/GET Hello', () => {
  it('should get Hello Travis', (done) => {
    request({
      url: 'http://localhost:1337',
      method: 'get',
    }, (error, response) => {
      response.should.have.property('body', 'Hellosodifsdoi Travis!\n');
      done();
    });
  });
});
