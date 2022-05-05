import { render, screen } from '@testing-library/react';

import Button from './button';

describe('Tests the custom UI Button Component', () => {
  it('Should render the button with the apropiate style.', () => {
    render(
      <Button backgroundColor="rgb(64, 0, 255)" color="black">
        Hello Testing
      </Button>
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle('background-color: rgb(64, 0, 255); color:black');
    expect(buttonElement.textContent).toBe('Hello Testing');
  });
});
