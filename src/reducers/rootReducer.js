import { combineReducers } from 'redux';

import tasksReducer from './tasksReducer.js';
import groupsReducer from './groupsReducer.js';
import uiReducer from './uiReducer.js';

export default combineReducers({
  tasks: tasksReducer,
  groups: groupsReducer,
  ui: uiReducer,
});
