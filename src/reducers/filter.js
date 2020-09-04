const { default: allActions } = require('../actions');

const filter = (state = 'all', action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return (state = 'all');
    case 'SHOW_INCOMPLETED':
      return (state = 'incompleted');
    case 'SHOW_COMPLETED':
      return (state = 'completed');
    default:
      return state;
  }
};

export default filter;
