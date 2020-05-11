import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItemDefaultView from './TodoItemDefaultView';
import TodoItemEditView from './TodoItemEditView';


const TodoItem = ({
  todo, onClick, onRemove, onEdit,
}) => {
  const [isEdited, setEdited] = useState(false);
  const handleEdit = (title) => {
    onEdit(todo.id, title);
    setEdited(false);
  };

  if (isEdited) {
    return (
      <TodoItemEditView
        todo={todo}
        onEnter={handleEdit}
        onBlur={() => setEdited(false)}
      />
    );
  }

  return (
    <TodoItemDefaultView
      todo={todo}
      onClick={onClick}
      onEdit={() => setEdited(true)}
      onRemove={onRemove}
    />
  );
};


TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoItem;
