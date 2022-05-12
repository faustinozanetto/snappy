describe('Editor Code', () => {
  it('Should change the Theme to Eva Light', () => {
    const BACKGROUND_COLOR = 'rgb(235, 238, 245)';
    const COLOR = 'rgb(93, 93, 95)';
    // Visit page.
    cy.visit('http://localhost:3000/');
    // Click toolbar theme button.
    cy.get('button').contains('Code').click();
    // Click on the Theme tab.
    cy.get('button').contains('Theme').click();

    // Get the theme selector.
    const themeSelector = cy.get('select');
    // Select Eva Light.
    themeSelector.select('Eva Light');
    // Make sure that the theme is set to Eva Light.
    const codeWrapper = cy.get('div').get('.code-wrapper');
    // Make sure that main colors are correct.
    codeWrapper.should('have.css', 'background-color', BACKGROUND_COLOR);
    codeWrapper.should('have.css', 'color', COLOR);
    // KEYWORDS
    codeWrapper
      .then(($wrapper) => {
        if ($wrapper.find('.keyword').length > 0) {
          return '.keyword';
        }
      })
      .then((selector) => {
        if (selector === 'keyword') {
          const constants = codeWrapper.find(selector);
          constants.should('have.css', 'color', KEYWORD);
        }
      });
  });
});
