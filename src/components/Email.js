import React from 'react';
import '../styles/Email.css';
import Button from './Button';

class Email extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'example@email.com',
      editing: false,
    };
  }

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

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  email = () => {
    if (this.state.editing) {
      return (
        <div className='email-display email-input-container'>
          <input
            type='text'
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
      );
    } else {
      return <div className='email-display'>{this.state.email}</div>;
    }
  };

  render() {
    return (
      <div>
        <h3 className='email-header'>
          Email
          {!this.state.editing && (
            <Button name='Edit' onClick={this.handleClickEdit} />
          )}
          {this.state.editing && (
            <Button name='Save' onClick={this.handleClickSave} />
          )}
        </h3>
        {this.email()}
      </div>
    );
  }
}

export default Email;
