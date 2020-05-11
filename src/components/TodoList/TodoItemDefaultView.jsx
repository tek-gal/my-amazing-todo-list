import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TodoItemDefaultView = ({
  todo, onClick, onEdit, onRemove,
}) => {
  const {
    id, title, date, completed,
  } = todo;
  const classes = cn({
    completed,
    'todo-item-default': true,
  });

  return (
    <li className={classes}>
      <span className="todo-item-info" onClick={() => onClick(id)}>
        <strong className="todo-item-title">
          {title}
        </strong>
        <small className="todo-item-date">
          {date.toLocaleDateString()}
        </small>
      </span>
      <span className="todo-item-buttons">
        <button
          className="material-icons edit-button"
          type="button"
          onClick={onEdit}
        >
          &#xe254;
        </button>
        <button
          className="material-icons delete-button"
          type="button"
          onClick={() => onRemove(id)}
        >
          close
        </button>
      </span>
    </li>
  );
};

TodoItemDefaultView.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoItemDefaultView;
