import React from 'react';
import PropTypes from 'prop-types';
import AddListButton from './AddListButton';
import AddListInput from './AddListInput';
import TodoListItem from './TodoListItem';
import './Sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addingNewList: false };
  }

  handleEnterPress = (value) => {
    const { addTodoList } = this.props;
    addTodoList(value);
    this.setState({ addingNewList: false });
  }

  handleItemClick = (id) => () => {
    const { selectTodoList } = this.props;
    selectTodoList(id);
  }

  handleEditClick = (id) => (name) => {
    const { renameTodoList } = this.props;
    renameTodoList(id, name);
  }

  handleInputBlur = () => {
    this.setState({ addingNewList: false });
  }

  render() {
    const { todolists, removeTodoList } = this.props;
    const { addingNewList } = this.state;

    return (
      <div className="sidebar">
        <AddListButton
          onClick={() => this.setState({ addingNewList: true })}
        />
        {
          todolists.length
            ? (
              <nav>
                <ul className="todolists-list">
                  {todolists.map(({ id, name, selected }) => (
                    <TodoListItem
                      key={id}
                      id={id}
                      name={name}
                      selected={selected}
                      onClick={this.handleItemClick(id)}
                      onEdit={this.handleEditClick(id)}
                      onRemove={() => removeTodoList(id)}
                    />
                  ))}
                </ul>
              </nav>
            )
            : null
        }
        {
          addingNewList
            ? (
              <AddListInput
                handleEnterPress={this.handleEnterPress}
                onBlur={this.handleInputBlur}
              />
            )
            : null
        }
      </div>
    );
  }
}


Sidebar.propTypes = {
  todolists: PropTypes.arrayOf(PropTypes.object).isRequired,
  addTodoList: PropTypes.func.isRequired,
  selectTodoList: PropTypes.func.isRequired,
  removeTodoList: PropTypes.func.isRequired,
  renameTodoList: PropTypes.func.isRequired,
};

export default Sidebar;
