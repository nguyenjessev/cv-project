import React from 'react';
import '../styles/Button.css';

class Button extends React.Component {
  render() {
    return (
      <button
        type='button'
        className='edit-button'
        onClick={this.props.onClick}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Button;
