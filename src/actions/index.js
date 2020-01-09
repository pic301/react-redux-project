let nextTodoId = 0 

const addTodo = text => ({
    type: 'ADD_TODO',
    text:text,
})

const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id:id,
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }