import React from 'react';
import { render, screen , cleanup  } from '@testing-library/react';
import Home from './Home';

afterEach(() => {
  cleanup();
});

test('Cocktail component avilable', () => {
  render(<Home />); 

  const divElement = screen.getByTestId('CocktailMain'); 

  expect(divElement).toBeInTheDocument();
});


test('Cocktail Grid avilable', () => {
    render(<Home />); 
  
    const dropDownElement = screen.getByTestId('CocktailGrid'); 
  
    expect(dropDownElement).toBeInTheDocument();
  });






