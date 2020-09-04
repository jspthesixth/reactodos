let todoId = 0;

const addTodo = body => {
  return {
    type: 'ADD_TODO',
    id: todoId++,
    body,
  };
};

const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

const markTodoAsCompleted = id => {
  return {
    type: 'MARK_TODO_AS_COMPLETED',
    id,
  };
};

export default {
  addTodo,
  deleteTodo,
  markTodoAsCompleted,
};
