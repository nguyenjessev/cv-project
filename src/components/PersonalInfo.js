import React from 'react';

class PersonalInfo extends React.Component {
  render() {
    return (
      <section className='personal-info'>
        <h2>Personal Info</h2>

        <div className='personal-info-container'>
          <div className='email-container'>
            <h3>Email</h3>
          </div>

          <div className='phone-container'>
            <h3>Phone</h3>
          </div>

          <div className='address-container'>
            <h3>Address</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default PersonalInfo;
