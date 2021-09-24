import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

test('creates diplay component', () => {
  render(<Display />);
  const DisplayComp = screen.getByTestId('display');
  expect(DisplayComp).toHaveTextContent('0');
});
