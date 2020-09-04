import React from 'react';
import { useDispatch } from 'react-redux';
import allActions from '../../actions';
import './index.css';
import checkmark from '../../assets/checkmark.svg';
import trash from '../../assets/trash.svg';

const TodoItem = ({ id, task, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span className="checkmark">
        <button
          className={!completed ? 'btn' : 'btn completed'}
          onClick={() =>
            dispatch(allActions.todoActions.markTodoAsCompleted(id))
          }
        >
          <img src={checkmark} alt="Complete" />
        </button>
      </span>
      <div className="task-divider">
        <span className={completed === false ? 'task' : 'task done'}>
          {task}
        </span>
      </div>
      <span className="buttons-divider">
        <button
          className="btn"
          onClick={() => dispatch(allActions.todoActions.deleteTodo(id))}
        >
          <img src={trash} alt="Delete" />
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
