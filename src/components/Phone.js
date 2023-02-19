import React from 'react';
import '../styles/Phone.css';
import Button from './Button';

class Phone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '123-4567',
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

  handlePhoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  phone = () => {
    if (this.state.editing) {
      return (
        <div className='phone-display phone-input-container'>
          <input
            type='text'
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
        </div>
      );
    } else {
      return <div className='phone-display'>{this.state.phone}</div>;
    }
  };

  render() {
    return (
      <div>
        <h3 className='phone-header'>
          Phone
          {!this.state.editing && (
            <Button name='Edit' onClick={this.handleClickEdit} />
          )}
          {this.state.editing && (
            <Button name='Save' onClick={this.handleClickSave} />
          )}
        </h3>
        {this.phone()}
      </div>
    );
  }
}

export default Phone;
