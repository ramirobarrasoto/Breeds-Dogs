/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const {Breed , conn } = require('../../src/db.js');

const agent = session(app);
const breed = {
  id: "d7a8ea01-fcee-4e8a-9f5d-6d64072f0fc5",
  name: 'Pug',
  weight: "23 - 27",
  height: "64 - 69",
  life_span: "10 - 13"
};

describe('Breed routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Breed.sync({ force: true })
    .then(() => Breed.create(breed)));
  describe('GET /breeds', () => {
    it('should get 200', () =>
      agent.get('/breeds').expect(200)
    );
  });
});
