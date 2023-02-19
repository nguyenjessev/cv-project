import React from 'react';
import '../styles/FullName.css';
import Button from './Button';

class FullName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'First',
      lastName: 'Last',
      hovered: false,
      editing: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  fullName = () => {
    if (this.state.editing) {
      return (
        <div className='name-container name-input-container'>
          <input
            type='text'
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          <input
            type='text'
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </div>
      );
    } else {
      return (
        <h1 className='name-container'>
          {this.state.firstName} {this.state.lastName}
        </h1>
      );
    }
  };

  handleClickEdit = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };

  render() {
    return (
      <header
        className='full-name'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.fullName()}

        {this.state.hovered && !this.state.editing && (
          <Button name='Edit' onClick={this.handleClickEdit} />
        )}

        {this.state.editing && (
          <Button name='Save' onClick={this.handleClickEdit} />
        )}
      </header>
    );
  }
}

export default FullName;
