const RECEIVE_TASK = 'RECEIVE_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

const receiveTask = (task, groupId) => {
  return {
    type: RECEIVE_TASK,
    task,
    groupId
  }
}

const removeTask = (taskId, groupId) => {
  return {
    type: REMOVE_TASK,
    taskId,
    groupId
  }
}

const completeTask = (taskId, groupId) => {
  return {
    type: COMPLETE_TASK,
    taskId,
    groupId
  }
}

export {
  RECEIVE_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  receiveTask,
  removeTask,
  completeTask
}