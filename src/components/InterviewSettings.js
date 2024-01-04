import React, { useState, useEffect } from 'react';

const InterviewSettings = ({ onFormChange }) => {
  const [interviewMode, setInterviewMode] = useState('');
  const [interviewDuration, setInterviewDuration] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [interviewLanguage, setInterviewLanguage] = useState('');
  const [formErrors, setFormErrors] = useState({
    interviewMode: '',
    interviewDuration: '',
    jobLocation: '',
    interviewLanguage: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (field, value) => {
    // Update the state with the value
    switch (field) {
      case 'interviewMode':
        setInterviewMode(value);
        break;
      case 'interviewDuration':
        setInterviewDuration(value);
        break;
      case 'jobLocation':
        setJobLocation(value);
        break;
      case 'interviewLanguage':
        setInterviewLanguage(value);
        break;
      default:
        break;
    }

    // Validate the form
    validateForm();

    // Call onFormChange with the updated values
    onFormChange({
      interviewMode,
      interviewDuration,
      jobLocation,
      interviewLanguage,
    });
  };

  const validateForm = () => {
    // Validate the form fields and set errors
    const errors = {
      interviewMode: '',
      interviewDuration: '',
      jobLocation: '',
      interviewLanguage: '',
    };

    if (!interviewMode) {
      errors.interviewMode = 'Mode is required';
    }

    if (!interviewDuration) {
      errors.interviewDuration = 'Duration is required';
    }

    if (!jobLocation) {
      errors.jobLocation = 'Job Location is required';
    }

    if (!interviewLanguage) {
      errors.interviewLanguage = 'Interview Language is required';
    }

    // Update the state with errors
    setFormErrors(errors);
  };

  useEffect(() => {
    if (formSubmitted && Object.values(formErrors).every((error) => error === '')) {
      window.alert('Form successfully submitted!');

      setFormSubmitted(false);
    }
  }, [formSubmitted, formErrors]);

  return (
    <div>

      <label htmlFor="interviewMode" className="block text-sm font-medium text-gray-700">
        Interview Mode:
      </label>
      <select
        id="interviewMode"
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        value={interviewMode}
        onChange={(e) => handleChange('interviewMode', e.target.value)}
        required
      >
        <option value="" disabled>Select Interview Mode</option>
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>
      <div className="text-red-500 mt-1 text-sm">{formErrors.interviewMode}</div>

      <label htmlFor="interviewDuration" className="block mt-4 text-sm font-medium text-gray-700">
        Interview Duration:
      </label>
      <select
        id="interviewDuration"
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        value={interviewDuration}
        onChange={(e) => handleChange('interviewDuration', e.target.value)}
        required
      >
        <option value="" disabled>Select Interview Duration</option>
        <option value="short">Short</option>
        <option value="medium">Medium</option>
        <option value="long">Long</option>
      </select>
      <div className="text-red-500 mt-1 text-sm">{formErrors.interviewDuration}</div>

      <label htmlFor="interviewLanguage" className="block mt-4 text-sm font-medium text-gray-700">
        Interview Language:
      </label>
      <select
        id="interviewLanguage"
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        value={interviewLanguage}
        onChange={(e) => handleChange('interviewLanguage', e.target.value)}
        required
      >
        <option value="" disabled>Select Interview Language</option>
        <option value="english">English</option>
        <option value="marathi">Marathi</option>
      </select>
      <div className="text-red-500 mt-1 text-sm">
        {formErrors.interviewLanguage && <div>{formErrors.interviewLanguage}</div>}
      </div>
    </div>
  );
};

export default InterviewSettings;
