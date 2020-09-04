import React from 'react';
import allActions from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';

const Toggle = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  return (
    todos.length > 0 && (
      <div className="toggle-container">
        <button
          className={filter === 'all' ? 'button active' : 'button'}
          onClick={() => dispatch(allActions.toggleActions.showAll())}
        >
          ALL
        </button>
        <button
          className={filter === 'incompleted' ? 'button active' : 'button'}
          onClick={() => dispatch(allActions.toggleActions.showIncompleted())}
        >
          INCOMPLETED
        </button>
        <button
          className={filter === 'completed' ? 'button active' : 'button'}
          onClick={() => dispatch(allActions.toggleActions.showCompleted())}
        >
          COMPLETED
        </button>
      </div>
    )
  );
};

export default Toggle;
