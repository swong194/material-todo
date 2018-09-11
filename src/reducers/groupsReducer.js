import { RECEIVE_GROUP, REMOVE_GROUP } from '../actions/groupActions.js';
import { RECEIVE_TASK, REMOVE_TASK, COMPLETE_TASK } from '../actions/taskActions.js';

const defaultState = {};

const groupsReducer = (state = defaultState, action) => {
  const { type, group, groupId, task, taskId } = action;
  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch(type) {
    case RECEIVE_GROUP:
      newState[group.id] = { todo: [], complete: [] };
      return newState;
    case REMOVE_GROUP:
      delete newState[groupId];
      return newState;
    case RECEIVE_TASK:
      newState[groupId].todo.push(task.id);
      return newState;
    case COMPLETE_TASK: {
      //remove from todo
      const todoId = newState[groupId].todo.indexOf(taskId);
      newState[groupId].todo.splice(todoId, 1);
      //add to complete
      newState[groupId].complete.push(taskId);

      return newState;
    }
    case REMOVE_TASK: {
      const todoId = newState[groupId].todo.indexOf(taskId);
      const completeId = newState[groupId].complete.indexOf(taskId);

      newState[groupId].todo.splice(todoId, 1);
      newState[groupId].complete.splice(completeId, 1);

      return newState;
    }
    default:
      return newState;
  }
}

export default groupsReducer;