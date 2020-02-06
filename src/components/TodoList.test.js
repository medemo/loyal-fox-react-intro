import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('renders todos', () => {
  const todos = [
    { id: 1, title: 'react' },
    { id: 2, title: 'testing' },
  ]
  const { getByTestId } = render(<TodoList todos={todos} />);
  const todosList = getByTestId('todos-list')

  expect(todosList.children.length).toEqual(todos.length)

  expect(todosList.children[0]).toHaveTextContent(new RegExp(todos[0].title, 'i'))
  expect(todosList.children[1]).toHaveTextContent(new RegExp(todos[1].title, 'i'))
});