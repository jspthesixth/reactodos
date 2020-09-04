const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          body: action.body,
          completed: false,
        },
      ];
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'MARK_TODO_AS_COMPLETED':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
