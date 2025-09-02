const request = require('supertest');
const app = require('../src/app');

describe('Express App', () => {
  test('GET / should return health status', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
    expect(response.body.message).toBe('CI Fundamentals Demo API');
  });

  test('POST /add should add two numbers', async () => {
    const response = await request(app)
      .post('/add')
      .send({ a: 5, b: 3 });
    
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(8);
  });

  test('POST /add should return error for invalid input', async () => {
    const response = await request(app)
      .post('/add')
      .send({ a: 'invalid', b: 3 });
    
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Both a and b must be numbers');
  });

  test('POST /multiply should multiply two numbers', async () => {
    const response = await request(app)
      .post('/multiply')
      .send({ a: 4, b: 3 });
    
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(12);
  });
});