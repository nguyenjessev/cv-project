import React from 'react';
import '../styles/SaveButton.css';

class SaveButton extends React.Component {
  render() {
    return (
      <button
        type='button'
        className='save-button'
        onClick={this.props.onClick}
      >
        Save
      </button>
    );
  }
}

export default SaveButton;
