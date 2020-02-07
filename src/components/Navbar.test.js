import React from 'react';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

test('renders navbar and navigating correctly', () => {
  const history = createMemoryHistory()

  const { getByTestId } = render(
    <Router history={history}>
      <Navbar />
    </Router>
  );

  fireEvent.click(getByTestId('link-to-contact'))
  expect(history.location.pathname).toBe('/contact')

  fireEvent.click(getByTestId('link-to-about'))
  expect(history.location.pathname).toBe('/about')

  fireEvent.click(getByTestId('link-to-home'))
  expect(history.location.pathname).toBe('/')
});
