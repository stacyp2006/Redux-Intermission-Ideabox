export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  id
});
