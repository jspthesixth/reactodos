import React from 'react';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';
import './index.css';

const TodosList = () => {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  if (filter === 'all') {
    return (
      <ul>
        {todos &&
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              task={todo.body}
              completed={todo.completed}
            />
          ))}
      </ul>
    );
  } else if (filter === 'incompleted') {
    return (
      <ul>
        {todos &&
          todos.map(
            todo =>
              todo.completed === false && (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  task={todo.body}
                  completed={todo.completed}
                />
              )
          )}
      </ul>
    );
  } else {
    return (
      <ul>
        {todos &&
          todos.map(
            todo =>
              todo.completed === true && (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  task={todo.body}
                  completed={todo.completed}
                />
              )
          )}
      </ul>
    );
  }
};

export default TodosList;
