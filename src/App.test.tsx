/** @jest-environment jsdom */
// import { render } from '@testing-library/react'
// import App from './App'

// test('Should render root app in document', () => {
//   render(<App />)
// })


import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import '@testing-library/jest-dom'

import App from './App';

test('renders the component', () => {
  const { getByLabelText } = render(<App />);
  
  // Check if input fields are present
  expect(getByLabelText('Number:')).toBeInTheDocument();
  expect(getByLabelText('Height:')).toBeInTheDocument();
  expect(getByLabelText('Width:')).toBeInTheDocument();
});

test('renders numbers correctly based on input', () => {
  const { getByLabelText, getByText } = render(<App />);
  const numberInput = getByLabelText('Number:') as HTMLInputElement;

  fireEvent.change(numberInput, { target: { value: '5' } });

  // Check if numbers are rendered correctly
  expect(getByText('1,2,3,4,5')).toBeInTheDocument();
});

test('calculates area of triangle correctly', () => {
  const { getByLabelText, getByText } = render(<App />);
  const heightInput = getByLabelText('Height:') as HTMLInputElement;
  const widthInput = getByLabelText('Width:') as HTMLInputElement;

  fireEvent.change(heightInput, { target: { value: '4' } });
  fireEvent.change(widthInput, { target: { value: '5' } });

  // Check if area of triangle is calculated correctly
  expect(getByText('Area of Triangle: 10')).toBeInTheDocument();
});
