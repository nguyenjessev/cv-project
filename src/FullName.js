import React from 'react';
import './FullName.css';
import EditButton from './EditButton';

class FullName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'First',
      lastName: 'Last',
      hovered: false,
    };
  }

  showEditButton = () => {
    this.setState({ hovered: true });
  };

  hideEditButton = () => {
    this.setState({ hovered: false });
  };

  render() {
    return (
      <header
        className='full-name'
        onMouseEnter={this.showEditButton}
        onMouseLeave={this.hideEditButton}
      >
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>

        {this.state.hovered && <EditButton />}

        {/* {this.editButton()} */}
      </header>
    );
  }
}

export default FullName;
