import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

test('Creates HEader for website', () => {
  render(
    <Router>
      <Header />
    </Router>,
  );
  const myHeader = screen.getByTestId('header');
  expect(myHeader).toHaveTextContent('Math Magicians');
});
