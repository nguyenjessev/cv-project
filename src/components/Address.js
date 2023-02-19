import React from 'react';
import '../styles/Address.css';
import Button from './Button';

class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lineOne: '123 Main St.',
      lineTwo: 'Apt C',
      city: 'City',
      state: 'State',
      zip: '12345',
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

  handleLineOneChange = (event) => {
    this.setState({
      lineOne: event.target.value,
    });
  };

  handleLineTwoChange = (event) => {
    this.setState({
      lineTwo: event.target.value,
    });
  };

  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };

  handleStateChange = (event) => {
    this.setState({
      state: event.target.value,
    });
  };

  handleZipChange = (event) => {
    this.setState({
      zip: event.target.value,
    });
  };

  address = () => {
    if (this.state.editing) {
      return (
        <div className='address-display address-input-container'>
          <input
            type='text'
            value={this.state.lineOne}
            onChange={this.handleLineOneChange}
          />
          <input
            type='text'
            value={this.state.lineTwo}
            onChange={this.handleLineTwoChange}
          />
          <input
            type='text'
            value={this.state.city}
            onChange={this.handleCityChange}
          />
          <input
            type='text'
            value={this.state.state}
            onChange={this.handleStateChange}
          />
          <input
            type='text'
            value={this.state.zip}
            onChange={this.handleZipChange}
          />
        </div>
      );
    } else {
      return (
        <div className='address-display'>
          <div>{this.state.lineOne}</div>
          <div>{this.state.lineTwo}</div>
          <div>
            {this.state.city}, {this.state.state} {this.state.zip}
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h3 className='address-header'>
          Address
          {!this.state.editing && (
            <Button name='Edit' onClick={this.handleClickEdit} />
          )}
          {this.state.editing && (
            <Button name='Save' onClick={this.handleClickSave} />
          )}
        </h3>
        {this.address()}
      </div>
    );
  }
}

export default Address;
