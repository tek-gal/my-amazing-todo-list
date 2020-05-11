import React from 'react';
import PropTypes from 'prop-types';


const AddListButton = ({ onClick }) => (
  <button
    className="add-list-button"
    type="button"
    onClick={onClick}
  >
    <span
      className="material-icons icon-image-preview"
    >
      post_add
    </span>
    <strong>Add New List</strong>
  </button>
);

AddListButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddListButton;
