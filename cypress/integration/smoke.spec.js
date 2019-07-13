describe('Smoke test', () => {
  it('Make sure welcome message comes up!', () => {
    cy.visit('http://localhost:1234/')
      .contains('Hello World!');
  });
});
