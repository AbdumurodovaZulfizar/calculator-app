import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/buttons/button';

test('creates button element', () => {
  render(<Button buttonNames="5" />);
  const newButton = screen.getByRole('button');
  expect(newButton).toHaveTextContent('5');
});

test('creates operation buttons', () => {
  render(<Button buttonNames="/" />);
  const operateButton = screen.getByRole('button');
  expect(operateButton).toHaveTextContent('/');
});
