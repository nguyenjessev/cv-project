import React from 'react';
import '../styles/EducationEntry.css';

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

  entry = () => {
    return (
      <div className='education-entry'>
        <h3 className='school-name'>{this.state.schoolName}</h3>
        <h4 className='major'>{this.state.major}</h4>
        <p className='notes'>{this.state.notes}</p>
      </div>
    );
  };

  render() {
    return this.entry();
  }
}

export default EducationEntry;
