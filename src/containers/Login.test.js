import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Login } from './Login';


test('renders Login with logged user', () => {
  const { container } = render(
    <Router>
      <Login
        user={{ id: 1 }}
        location={{ state: { referrer: '/' } }}
      />
    </Router>
  )
  expect(container).toBeEmpty()
});

test('renders Login with no user', () => {
  const handleLogin = jest.fn()

  const { container, getByTestId } = render(
    <Router>
      <Login
        login={handleLogin}
        user={null}
        location={{ state: { referrer: '/' } }}
      />
    </Router>
  )
  expect(container).not.toBeEmpty()

  const selectUser = getByTestId('select-user')

  expect(selectUser.value).toEqual("0")
  fireEvent.click(getByTestId('login-button'))
  expect(handleLogin).not.toHaveBeenCalled()

  fireEvent.change(selectUser, { target: { value: 2 } })
  expect(selectUser.value).toEqual("2")

  fireEvent.click(getByTestId('login-button'))
  expect(handleLogin).toHaveBeenCalled()

  expect(handleLogin.mock.calls[0][0]).toHaveProperty('id')
});