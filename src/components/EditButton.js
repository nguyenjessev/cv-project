import React from 'react';
import '../styles/EditButton.css';

class EditButton extends React.Component {
  render() {
    return (
      <button
        type='button'
        className='edit-button'
        onClick={this.props.onClick}
      >
        Edit
      </button>
    );
  }
}

export default EditButton;
