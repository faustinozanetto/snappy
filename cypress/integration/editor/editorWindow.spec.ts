describe('Editor Window', () => {
  it('Should toggle the window controls top bar', () => {
    // Visit page.
    cy.visit('http://localhost:3000/');
    // Click toolbar window button.
    cy.get('button').contains('Window').click();
    // Click on the Display tab.
    cy.get('button').contains('Display').click();
    // Get the checkbox.
    const checkbox = cy.get('input[type="checkbox"]');
    // Check the checkbox.
    checkbox.check();
    // Make sure that the checkbox is checked.
    checkbox.should('be.checked');
    // Uncheck the checkbox.
    checkbox.uncheck();
    // Make sure that the checkbox is unchecked.
    checkbox.should('not.be.checked');
  });

  it('Should modify the horizontal padding', () => {});
});
