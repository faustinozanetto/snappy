describe('Editor Background', () => {
  it('Should set the background color to a plain red', () => {
    // Visit page.
    cy.visit('http://localhost:3000/');
    // Click toolbar background button.
    cy.get('button').contains('Background').click();
    // Click on the Color tab.
    cy.get('button').contains('Color').click();
    // Get picker.
    const colorPicker = cy.get('div').get('.react-colorful__pointer').get('.react-colorful__saturation-pointer');
    const huePicker = cy.get('div').get('.react-colorful__hue-pointer');

    // Drag the color to the top right within its parent.
    colorPicker
      .click({ force: true })
      .trigger('mousedown')
      .trigger('mousemove')
      .trigger('mouseup')
      .trigger('mouseleft', { which: 1, pageX: 600, pageY: 100 })
      .trigger('mouseright', { which: 1, pageX: 600, pageY: 600 })
      .trigger('mouseleave');
    // Drag the hue to right
    huePicker.trigger('mousedown', { which: 1 });
    huePicker.trigger('mousemove', { x: 100, y: 0 });
    huePicker.trigger('mouseup', {});

    // colorPicker.invoke('attr', 'style', 'left: 100%; top: 0%;');
    // // Drag the hue to the right.
    // huePicker.invoke('attr', 'style', 'left: 100%; top: 50%;');
    // Click on the Apply button.
  });
});
