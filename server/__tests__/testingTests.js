const supertest = require('supertest');
const app = require('../index.ts');

describe('miscellaneous tasks', () => {
    const request = supertest(app);
  
    it('successfully pings /api/testing route', (done) => {
      request
        .get('/api/testing')
        .expect('Content-Type', /json/)
        .expect((response) => {
          expect(response.body).toEqual({ message: 'Successfully pinged /api/testing' });
        })
        .expect(200, done);
    });

    it('recieves a 400 when parameter is required', (done) => {
        request
          .post('/api/auth/login')
          .send({
            username: '',
            password: 'password',
            type: '',
          })
          .set('Content-Type', 'application/json')
          .expect('Content-Type', /json/)
          .expect((response) => {
            expect(response.body).toEqual({ message: 'Invalid request.' });
          })
          .expect(400, done);
      });