import React from 'react';
import PropTypes from 'prop-types';


class AddListInput extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    const { name } = this.props;
    this.state = { value: name };
  }

  componentDidMount() {
    this.input.current.focus();
  }

  handleInput = (event) => {
    event.persist();
    this.setState(() => ({ value: event.target.value }));
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const { value } = this.state;
      const { handleEnterPress } = this.props;
      if (!value.trim()) return;
      handleEnterPress(value);
    }
  }

  render() {
    const { value } = this.state;
    const { onBlur } = this.props;

    return (
      <div className="add-list-input">
        <input
          ref={this.input}
          value={value}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleInput}
          onBlur={onBlur}
        />
      </div>
    );
  }
}

AddListInput.defaultProps = {
  name: '',
};

AddListInput.propTypes = {
  handleEnterPress: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default AddListInput;
