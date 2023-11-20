// src/components/CustomerFormCard.js
import React, { useState } from 'react';
import './CustomerFormCard.css'; // This should be your CSS file for the CustomerFormCard component
import ApiCustomers from '../../api/ApiCustomers'; // Import your API service
import FormGroup from '../base/FormGroup';
import DynamicInputFieldGroup from '../base/DynamicInputFieldGroup';
const CustomerFormCard = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tz, setTz] = useState('');
  const [addressInfoChecked, setAddressInfoChecked] = useState(false);
  const [cityName, setCityName] = useState('');
  const [street, setStreet] = useState('');
  const [propertyNumber, setPropertyNumber] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const customerData = { 
      name,
      phone,
      tz,
      ...(addressInfoChecked && { cityName, street, propertyNumber })
    };
    console.log('Customer Form submitted with:', customerData);
    try {
      await ApiCustomers.createCustomer(customerData);
    } catch (error) {
      console.error('There was an error submitting the form', error);
    }
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} className="form-card-content">
      <h2 className="form-title">לקוח חדש</h2> {/* Add this line for the title */}

          <FormGroup
          label="שם"
          inputType="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true} // Now you can pass the 'required' attribute
        />

        <FormGroup
          label="מספר טלפון"
          inputType="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required={true} // Adding 'required' for phone number as well
          pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$" // Adding the 'pattern' attribute for phone number validation
        />

        <FormGroup
          label="תז\חפ"
          inputType="text"
          id="tz"
          value={tz}
          onChange={(e) => setTz(e.target.value)}
          // Assuming 'required' or 'pattern' is not needed for 'tz'
        />


        {/* Checkbox for Address Information */}
        <div className="form-group">
          <label htmlFor="addressInfo">הוסף נכס ללקוח</label>
          <input
            type="checkbox"
            id="addressInfo"
            checked={addressInfoChecked}
            onChange={(e) => setAddressInfoChecked(e.target.checked)}
          />
        </div>

       {/* Conditional Rendering for Address Fields */}
      {addressInfoChecked && (
          <>
            <FormGroup
              label="עיר"
              inputType="text"
              id="cityName"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <FormGroup
              label="כביש"
              inputType="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <FormGroup
              label="מספר נכס"
              inputType="text"
              id="propertyNumber"
              value={propertyNumber}
              onChange={(e) => setPropertyNumber(e.target.value)}
            />
          </>
        )}

        <button type="submit" className="form-submit-button">שמור</button>
      </form>
    </div>
  );
};

export default CustomerFormCard;
