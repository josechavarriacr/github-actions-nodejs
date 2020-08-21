const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('respond with Hello World via Github Actions', (done) => {
    request(app).get('/').expect(200, done);
  })
});
