const showAll = () => {
  return {
    type: 'SHOW_ALL',
  };
};

const showIncompleted = () => {
  return {
    type: 'SHOW_INCOMPLETED',
  };
};

const showCompleted = () => {
  return {
    type: 'SHOW_COMPLETED',
  };
};

export default {
  showAll,
  showIncompleted,
  showCompleted,
};
