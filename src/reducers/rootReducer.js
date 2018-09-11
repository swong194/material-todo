import { combineReducers } from 'redux';

import tasksReducer from './tasksReducer.js';
import groupsReducer from './groupsReducer.js';

export default combineReducers({
  tasks: tasksReducer,
  groups: groupsReducer
});
