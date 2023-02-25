import React from 'react';
import '../styles/EducationEntry.css';
import Button from './Button';

class EducationEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: true,
      schoolName: props.schoolName,
      major: props.major,
      notes: props.notes,
    };
  }

  handleClickSave = () => {
    this.setState({
      editing: false,
    });
  };

  handleClickEdit = () => {
    this.setState({
      editing: true,
    });
  };

  entry = () => {
    if (this.state.editing) {
      return (
        <div className='education-entry'>
          <input
            type='text'
            name='school-name-input'
            id='school-name-input'
            value={this.state.schoolName}
          />
          <input
            type='text'
            name='major-input'
            id='major-input'
            value={this.state.major}
          />
          <textarea
            type='text'
            name='notes-input'
            id='notes-input'
            value={this.state.notes}
          />
          <Button name='Save' onClick={this.handleClickSave} />
        </div>
      );
    } else {
      return (
        <div className='education-entry'>
          <h3 className='school-name'>
            {this.state.schoolName}
            <Button name='Edit' onClick={this.handleClickEdit} />
          </h3>
          <h4 className='major'>{this.state.major}</h4>
          <p className='notes'>{this.state.notes}</p>
        </div>
      );
    }
  };

  render() {
    return this.entry();
  }
}

export default EducationEntry;
