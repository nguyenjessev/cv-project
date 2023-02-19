import React from 'react';
import '../styles/FullName.css';
import Button from './Button';

class FullName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'First',
      lastName: 'Last',
      editing: false,
    };
  }

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
      editing: true,
    });
  };

  handleClickSave = () => {
    this.setState({
      editing: false,
    });
  };

  render() {
    return (
      <header className='full-name'>
        {this.fullName()}

        {!this.state.editing && (
          <Button name='Edit' onClick={this.handleClickEdit} />
        )}

        {this.state.editing && (
          <Button name='Save' onClick={this.handleClickSave} />
        )}
      </header>
    );
  }
}

export default FullName;
