import {
  ADD_TODO_LIST,
  SELECT_TODO_LIST,
  RENAME_TODO_LIST,
  REMOVE_TODO_LIST,
  ADD_TODO,
  TOGGLE_TODO,
  RENAME_TODO,
  REMOVE_TODO,
} from './types';

const TodoListsActions = {
  addTodoList: (name) => ({
    type: ADD_TODO_LIST,
    payload: name,
  }),
  selectTodoList: (id) => ({
    type: SELECT_TODO_LIST,
    payload: id,
  }),
  renameTodoList: (id, title) => ({
    type: RENAME_TODO_LIST,
    payload: [id, title],
  }),
  removeTodoList: (id) => ({
    type: REMOVE_TODO_LIST,
    payload: id,
  }),
  addTodo: (title) => ({
    type: ADD_TODO,
    payload: title,
  }),
  toggleTodo: (id) => ({
    type: TOGGLE_TODO,
    payload: id,
  }),
  renameTodo: (id, title) => ({
    type: RENAME_TODO,
    payload: [id, title],
  }),
  removeTodo: (id) => ({
    type: REMOVE_TODO,
    payload: id,
  }),
};


export default TodoListsActions;
