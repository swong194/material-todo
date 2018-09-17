import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  TOGGLE_SIDEBAR,
} from '../actions/uiActions.js';

const defaultState = { open: true };

const uiReducer = (state = defaultState, action) => {
  const { type } = action;
  Object.freeze(state);

  const newState = Object.assign({}, state);

  switch (type) {
    case OPEN_SIDEBAR:
      newState.open = true;
      return newState;
    case CLOSE_SIDEBAR:
      newState.open = false;
      return newState;
    case TOGGLE_SIDEBAR:
      newState.open = !newState.open;
      return newState;
    default:
      return newState;
  }
};

export default uiReducer;
