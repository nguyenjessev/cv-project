import React from 'react';
import Email from './Email';
import Phone from './Phone.js';
import Address from './Address.js';
import '../styles/PersonalInfo.css';

class PersonalInfo extends React.Component {
  render() {
    return (
      <section className='personal-info'>
        <h2>Personal Info</h2>

        <div className='personal-info-container'>
          <Email />

          <Phone />

          <Address />
        </div>
      </section>
    );
  }
}

export default PersonalInfo;
