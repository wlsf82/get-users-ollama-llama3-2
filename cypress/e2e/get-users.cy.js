describe('GET /users endpoint', () => {
  it('returns successful response', () => {
    cy.request({
      method: 'GET',
      url: '/users',
    }).then(({ status, body }) => {
      expect(status).to.equal(200);
      expect(body).to.be.an('array');
      expect(body.length).to.be.above(0);
    });
  });

  it('returns expected user data', () => {
    cy.request({
      method: 'GET',
      url: '/users',
    }).then(({ body }) => {
      expect(body).to.be.an('array');
      body.forEach(({ id, name, email }) => {
        expect(id).to.be.a('number');
        expect(name).to.be.a('string');
        expect(email).to.be.a('string');
      });
    });
  });
});
