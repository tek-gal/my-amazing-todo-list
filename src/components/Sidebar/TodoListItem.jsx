import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import AddListInput from './AddListInput';


const TodoListItem = ({
  id, name, selected, onClick, onRemove, onEdit,
}) => {
  const [isEdited, setEdited] = useState(false);
  const klasses = cn({
    selected,
    'todolists-list-item': true,
  });
  const handleEdit = (newName) => {
    onEdit(newName);
    setEdited(false);
  };

  if (!isEdited) {
    return (
      <li
        id={id}
        className={klasses}
      >
        <button
          type="button"
          className="todo-list-name"
          onClick={onClick}
        >
          {name}
        </button>
        <button
          type="button"
          className="material-icons"
          onClick={() => setEdited(true)}
        >
          &#xe254;
        </button>
        <button
          type="button"
          className="material-icons icon-image-preview"
          onClick={onRemove}
        >
          close
        </button>
      </li>
    );
  }

  return (
    <AddListInput
      name={name}
      handleEnterPress={handleEdit}
      onBlur={() => setEdited(false)}
    />
  );
};

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TodoListItem;
