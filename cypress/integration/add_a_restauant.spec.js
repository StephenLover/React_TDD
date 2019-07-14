describe('adding a restaurant', () => {

  it('displays the restaurant in the list', () => {
    const newLocal = cy.visit('http://localhost:1234');
    const restaurantName = 'Sushi Place';


    newLocal.get('[data-test="addRestaurantButton"]')
      .click();

    newLocal.get('[data-test="newRestaurantName"]')
      .type(restaurantName);

    newLocal.get('[data-test="saveNewRestaurantButton"]')
      .click();

    newLocal.contains(restaurantName);
  });
});