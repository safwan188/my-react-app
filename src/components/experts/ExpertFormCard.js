import React, { useState } from 'react';
import './ExpertFormCard.css'; // Ensure the styling is appropriate for multiple input fields
import ApiExpert from '../../api/ApiExperts';
import FormGroup from '../base/FormGroup';
import DynamicInputFieldGroup from '../base/DynamicInputFieldGroup';
const ExpertFormCard = () => {
  const [name, setName] = useState('');
  const [education, setEducation] = useState(['']);
  const [experience, setExperience] = useState(['']);
 const [tz, setTz] = useState('');
  const [phone, setPhone] = useState('');
  const handleEducationChange = (index, value) => {
    const updatedEducation = education.map((item, i) => (i === index ? value : item));
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, value) => {
    const updatedExperience = experience.map((item, i) => (i === index ? value : item));
    setExperience(updatedExperience);
  };

  const addEducationField = () => {
    setEducation([...education, '']);
  };

  const addExperienceField = () => {
    setExperience([...experience, '']);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredEducation = education.filter(edu => edu.trim() !== '');
    const filteredExperience = experience.filter(exp => exp.trim() !== '');
  
    // Only proceed if there is a name and there's at least one education or experience entry
    if (name.trim() !== '' ) {
      ApiExpert.createExpert({ name, education: filteredEducation, experience: filteredExperience, tz, phone })
        .then(response => {
          // Handle the response here, maybe clear the form or display a success message
        })
        .catch(error => {
          // Handle any errors here, such as displaying a notification to the user
        });
      console.log('Expert Form submitted with:', { name, education: filteredEducation, experience: filteredExperience , tz, phone});
    } else {
      // Handle the case where the form is not correctly filled out, maybe display an error message
    }
  };

  return (
    <div className="form-card">
            <h2 className="form-title">קבלן חדש</h2> {/* Add this line for the title */}

      <form onSubmit={handleSubmit} className="form-card-content">
            <FormGroup
        label="תז"
        inputType="text"
        id="tz"
        value={tz}
        onChange={(e) => setTz(e.target.value)}
      />

      <FormGroup
        label="טלפון"
        inputType="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <FormGroup
        label="שם"
        inputType="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
        <DynamicInputFieldGroup
          label="הסמכות הקבלן"
          values={education}
          onChange={handleEducationChange}
          onAddField={addEducationField}
        />

        <DynamicInputFieldGroup
          label="ניסיון מקצועי"
          values={experience}
          onChange={handleExperienceChange}
          onAddField={addExperienceField}
        />
        <button type="submit" className="form-submit-button">שמור</button>
      </form>
    </div>
  );
};

export default ExpertFormCard;
