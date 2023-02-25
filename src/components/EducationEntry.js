import React from 'react';

class EducationEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: true,
      data: props.data,
    };
  }

  render() {
    return <div></div>;
  }
}

export default EducationEntry;
