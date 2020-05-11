import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const TodoItemEditView = ({ todo, onEnter, onBlur }) => {
  let textInput = null;
  const { title } = todo;
  const [newTitle, setNewTitle] = useState(title);
  useEffect(() => {
    textInput.focus();
  });
  const handleKeyPress = (event) => {
    if (!newTitle.trim()) return;
    if (event.key === 'Enter') {
      onEnter(newTitle);
    }
  };

  return (
    <li className="todo-item-edit">
      <input
        type="text"
        value={newTitle}
        ref={(input) => { textInput = input; }}
        onChange={(e) => setNewTitle(e.target.value)}
        onKeyPress={handleKeyPress}
        onBlur={onBlur}
      />
    </li>
  );
};

TodoItemEditView.propTypes = {
  todo: PropTypes.instanceOf(Object).isRequired,
  onEnter: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default TodoItemEditView;
