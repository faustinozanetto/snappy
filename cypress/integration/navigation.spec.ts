describe('Navigation', () => {
  it('Should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');

    // The new page should contain an h1 with "Snappy"
    cy.get('h2').contains('Snappy');
  });

  it('Should navigate to error page', () => {
    cy.request({ url: 'http://localhost:3000/nonexisting', failOnStatusCode: false })
      .its('status')
      .should('equal', 404);
    cy.visit('http://localhost:3000/nonexisting', { failOnStatusCode: false });

    // Make sure that the error section shows with the corresponding message.
    cy.get('h2').contains('404');
    cy.get('p').contains('Page Not Found');
  });
});

const asModule = {};
export default asModule;
