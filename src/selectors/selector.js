const selectTodosAndCompletes = (state, ownProps) => {
  const {
    match: {
      params: { groupId },
    },
  } = ownProps;
  const { groups, tasks } = state;
  const todos = [];
  const completes = [];
  let group = groups[groupId];

  if (group) {
    group.todo.forEach(todoId => todos.push(tasks[todoId]));
    group.complete.forEach(completeId => completes.push(tasks[completeId]));
  }

  return { todos, completes };
};

const getGroupIds = state => {
  return Object.keys(state.groups);
};

const provideRedirect = (state, ownProps) => {
  const {
    match: {
      params: { groupId },
    },
  } = ownProps;
  const { groups } = state;

  if (groupId === 'any') {
    return Object.keys(groups)[0];
  }

  return false;
};

export { selectTodosAndCompletes, provideRedirect, getGroupIds };
