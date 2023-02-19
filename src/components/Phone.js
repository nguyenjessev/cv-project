import React from 'react';

class Phone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '123-4567',
      editing: false,
    };
  }

  render() {
    return (
      <div className='phone-container'>
        <h3>Phone</h3>
        {this.state.phone}
      </div>
    );
  }
}

export default Phone;
