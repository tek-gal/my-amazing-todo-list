import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';
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

const TodoListsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO_LIST:
      return [
        ...state,
        {
          id: uuidv4(),
          name: payload,
          todos: [],
          selected: false,
        },
      ];
    case SELECT_TODO_LIST:
      return state.map((list) => {
        list.selected = list.id === payload;
        return list;
      });
    case RENAME_TODO_LIST: {
      const [id, name] = payload;
      const list = state.find((l) => l.id === id);
      list.name = name;
      return [...state];
    }
    case REMOVE_TODO_LIST:
      return state.filter(({ id }) => id !== payload);
    case ADD_TODO: {
      const { todos } = state.find((list) => list.selected);
      todos.push({
        id: uuidv4(),
        title: payload,
        completed: false,
        date: new Date(),
      });
      return cloneDeep(state);
    }
    case TOGGLE_TODO:
      state
        .find((list) => list.selected)
        .todos
        .map((todo) => {
          if (todo.id === payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
      return cloneDeep(state);
    case RENAME_TODO: {
      const [id, title] = payload;
      state
        .find((list) => list.selected)
        .todos
        .map((todo) => {
          if (todo.id === id) todo.title = title;
          return todo;
        });
      return [...state];
    }
    case REMOVE_TODO: {
      const selectedList = state.find((list) => list.selected);
      selectedList.todos = selectedList
        .todos
        .filter(({ id }) => id !== payload);
      return cloneDeep(state);
    }
    default:
      return state;
  }
};

export default TodoListsReducer;
