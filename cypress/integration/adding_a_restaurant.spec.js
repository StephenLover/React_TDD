describe('adding a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const restaurantName = 'Coogee Sushi';
    cy.visit('http://localhost:1234');

    // modal not shown at the start
    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    cy.get('[data-test="addRestaurantButton"]')
      .click();

    // modal can be cancelled
    cy.get('[data-test="addRestaurantModal"] button.modal-close')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    // modal can be added
    cy.get('[data-test="addRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-test="saveNewRestaurantButton"]')
      .click();

    cy.get('[data-test="newRestaurantName"]')
      .should('not.be.visible');

    cy.contains(restaurantName);
  });
});
