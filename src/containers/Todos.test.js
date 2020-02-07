import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../store/reducers'
import Todos from './Todos';
import { FETCH_TODOS_SUCCESS } from '../store/actionTypes'
import { fetchTodos } from '../store/actions/todosAction'

jest.mock('../store/actions/todosAction')

test('renders todos', () => {
  const store = createStore(
    reducer,
    {
      todos: {
        data: [],
        error: null,
        loading: false
      },
      user: {
        id: 3
      }
    },
  )

  const dummyTodos = [
    { id: 1, title: 'learn testing' },
    { id: 2, title: 'learn mocking' },
  ]

  const mockedFetchTodos = jest.fn(() => {
    return {
      type: FETCH_TODOS_SUCCESS,
      todos: dummyTodos
    }
  })

  fetchTodos.mockImplementation(mockedFetchTodos)

  const { getByTestId } = render(
    <Provider store={store}>
      <Todos />
    </Provider>
  );

  const todosList = getByTestId('todos-list')

  expect(todosList).toBeInTheDocument()
  expect(todosList.children.length).toEqual(dummyTodos.length)
});
