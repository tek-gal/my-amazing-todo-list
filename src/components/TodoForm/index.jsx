import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoForm.scss';


const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle('');
  };
  const onChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input
        className="todo-form"
        type="text"
        value={title}
        onChange={onChange}
        placeholder="Input new todo's title"
      />
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};


export default TodoForm;
