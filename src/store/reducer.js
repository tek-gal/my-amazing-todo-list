import { combineReducers } from 'redux';
import TodoListsReducer from './TodoLists/reducer';

const reducer = combineReducers({
  todolists: TodoListsReducer,
});

export default reducer;
