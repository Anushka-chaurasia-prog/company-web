import React from 'react';
import './HealthRecords.css';
import R1 from '../assets/R1.svg';
import R2 from '../assets/R2.svg';

const HealthRecords = () => {
  return (
    <div className="outer-container">
      <div className="health-records-container">
        <div className="header">
          <h1>Maintain your health <br />records in <span className="highlight">one place</span></h1>
          <p>Need vaccination history for your son's school admission? Roojh has you covered! Store and access all your health records in one secure place, making paperwork a thing of the past.</p>
        </div>
        <div className="cards">
          <div className="card">
            <p className="card-title">Hey Roojh 👋</p>
            <p>How do I access my medical history in case of emergency?</p>
          </div>
          <div className="card">
            <p className="card-title">How Do I Access My Medical History In Case Of Emergency</p>
          </div>
          <div className="card">
            <img src={R2} alt="Medication List" />
            <p>How can I update my medication list on the app?</p>
          </div>
          <div className="card">
            <img src={R1} alt="Appointment Reminder" />
            <p>How can you remind me when my next health check-up is due?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;
