import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';
import './index.css';

const AddTodo = () => {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    if (newTask) {
      dispatch(allActions.todoActions.addTodo(newTask));
      setNewTask('');
    } else {
      alert('Enter a task to do!');
    }
  };

  const onInputChange = e => {
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={onFormSubmit} className="todo-form">
      <input type="text" value={newTask} onChange={onInputChange} />
    </form>
  );
};

export default AddTodo;
