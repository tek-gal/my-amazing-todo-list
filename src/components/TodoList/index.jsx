import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodoList.scss';

class TodoList extends React.Component {
  render() {
    const {
      todos, toggleTodo, removeTodo, renameTodo,
    } = this.props;
    if (todos.length === 0) return <p>No todos yet</p>;

    return (
      <ul className="todo-list">
        {
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onClick={toggleTodo}
              onRemove={removeTodo}
              onEdit={renameTodo}
            />
          ))
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  renameTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
