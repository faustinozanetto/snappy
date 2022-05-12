describe('Editor Font', () => {
  // FONT FAMILY
  it('Should set the font to Source Code Pro', () => {
    // Visit page.
    cy.visit('http://localhost:3000/');
    // Click toolbar font button.
    cy.get('button').contains('Font').click();
    // Click on the Font tab.
    cy.get('button').contains('List').click();
    const fontSelector = cy.get('select');
    // Select Source Code Pro.
    fontSelector.select('Source Code Pro');
    // Make sure that the font is set to Source Code Pro.
    const codeWrapper = cy.get('div').get('.code-wrapper');
    codeWrapper.should('have.css', 'font-family').and('match', /Source Code Pro/);
  });
  // FONT SIZE
  it('Should set the font size to 20px', () => {
    // Visit page.
    cy.visit('http://localhost:3000/');
    // Click toolbar font button.
    cy.get('button').contains('Font').click();
    // Click on the Font tab.
    cy.get('button').contains('Options').click();
    // Get slider by div and role slider
    const fontSizeSlider = cy.get('div').get('[role="slider"]').get('[aria-label="Font Size"]');
    // Drag the slider to 20px.
    fontSizeSlider.trigger('mousedown', { which: 1 });
    fontSizeSlider.trigger('mousemove', { x: 20, y: 0 });
    fontSizeSlider.trigger('mouseup', {});
    // Make sure that the font size is set to 20px.
    const codeWrapper = cy.get('div').get('.code-wrapper');
  });
});
