const RECEIVE_GROUP = 'RECEIVE_GROUP';
const REMOVE_GROUP = 'REMOVE_GROUP';

const receiveGroup = group => {
  return {
    type: RECEIVE_GROUP,
    group
  }
};

const removeGroup = id => {
  return {
    type: REMOVE_GROUP,
    id
  }
};

export {
  RECEIVE_GROUP,
  REMOVE_GROUP,
  receiveGroup,
  removeGroup
}