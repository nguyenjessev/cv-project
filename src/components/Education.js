import React from 'react';
import Button from './Button';
import educationExperience from '../educationExperience';
import EducationEntry from './EducationEntry';
import '../styles/Education.css';

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
    };
  }

  handleClickAdd = () => {
    const newEducationExperience = educationExperience();

    this.setState({
      entries: this.state.entries.concat(newEducationExperience),
    });
  };

  render() {
    return (
      <section className='education'>
        <h2 className='education-header'>Education</h2>

        {this.state.entries.map((entry, index) => {
          return (
            <EducationEntry
              schoolName={entry.schoolName}
              major={entry.major}
              notes={entry.notes}
              key={index}
            />
          );
        })}

        <Button name='Add' onClick={this.handleClickAdd} />
      </section>
    );
  }
}

export default Education;
