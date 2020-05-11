import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TodoList, TodoForm } from '@components';
import TodoListsActions from '@store/TodoLists/actions';


const Todos = ({
  hasLists, hasSelectedList, todos,
  addTodo, toggleTodo, removeTodo, renameTodo,
}) => {
  if (!hasLists) return <p>Create Todo List</p>;
  if (!hasSelectedList) return <p>Select Todo List</p>;

  return (
    <>
      <TodoForm
        addTodo={addTodo}
      />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        renameTodo={renameTodo}
        removeTodo={removeTodo}
      />
    </>
  );
};


const mapStateToProps = ({ todolists }) => {
  const selectedList = todolists.find((list) => list.selected);

  return {
    hasSelectedList: !!selectedList,
    hasLists: todolists.length > 0,
    todos: selectedList ? selectedList.todos : [],
  };
};
const mapDispatchToProps = {
  addTodo: TodoListsActions.addTodo,
  toggleTodo: TodoListsActions.toggleTodo,
  renameTodo: TodoListsActions.renameTodo,
  removeTodo: TodoListsActions.removeTodo,
};

Todos.propTypes = {
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  renameTodo: PropTypes.func.isRequired,
  hasLists: PropTypes.bool.isRequired,
  hasSelectedList: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);
