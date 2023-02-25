import React from 'react';
import Button from './Button';
import educationExperience from '../educationExperience';

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
        <h2>Education</h2>

        <Button name='Add' onClick={this.handleClickAdd} />
      </section>
    );
  }
}

export default Education;
