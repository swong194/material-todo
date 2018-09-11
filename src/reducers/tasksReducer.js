import { RECEIVE_TASK, REMOVE_TASK } from '../actions/taskActions.js';
import defaultState from '../sample_data/taskData.js';

const tasksReducer = (state = defaultState, action) => {
  const { type } = action;
  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch (type) {
    case RECEIVE_TASK:
      const { task } = action;

      newState[task.id] = task;
      return newState;
    case REMOVE_TASK:
      const { taskId } = action;

      delete newState[taskId];
      return newState;
    default:
      return newState;
  }
};

export default tasksReducer;
