import React from 'react';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'First',
      lastName: 'Last',
    };
  }

  render() {
    return (
      <header>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </header>
    );
  }
}

export default PersonalInfo;
