import React from 'react';
import TodosList from '../TodosList';
import AddTodo from '../AddTodo';
import Header from '../Header';
import Toggle from '../Toggle';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <AddTodo />
        <Toggle />
        <TodosList />
      </div>
    </div>
  );
};

export default App;
