import React, { useState } from 'react';

const JobDetails = ({ onFormChange, isValid }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDetails, setJobDetails] = useState('');
  const [jobLocation, setJobLocation] = useState('');

  const handleChange = (field, value) => {
    let updatedJobTitle = jobTitle;
    let updatedJobDetails = jobDetails;
    let updatedJobLocation = jobLocation;

    switch (field) {
      case 'jobTitle':
        updatedJobTitle = value;
        break;
      case 'jobDetails':
        updatedJobDetails = value;
        break;
      case 'jobLocation':
        updatedJobLocation = value;
        break;
      default:
        break;
    }

    setJobTitle(updatedJobTitle);
    setJobDetails(updatedJobDetails);
    setJobLocation(updatedJobLocation);


    onFormChange({
      jobTitle: updatedJobTitle,
      jobDetails: updatedJobDetails,
      jobLocation: updatedJobLocation,
    });

    isValid(updatedJobTitle !== '' && updatedJobDetails !== '' && updatedJobLocation !== '');
  };

  return (
    <div>
   
      <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
        Job Title:
      </label>
      <input
        type="text"
        id="jobTitle"
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        value={jobTitle}
        onChange={(e) => handleChange('jobTitle', e.target.value)}
        required
      />
      <div className="text-red-500 mt-1 text-sm">
        {jobTitle === '' && 'Job Title is required'}
      </div>

      <label htmlFor="jobDetails" className="block mt-4 text-sm font-medium text-gray-700">
        Job Details:
      </label>
      <textarea
        id="jobDetails"
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        value={jobDetails}
        onChange={(e) => handleChange('jobDetails', e.target.value)}
        required
      />
      <div className="text-red-500 mt-1 text-sm">
        {jobDetails === '' && 'Job Details is required'}
      </div>

      <label htmlFor="jobLocation" className="block mt-4 text-sm font-medium text-gray-700">
        Job Location:
      </label>
      <input
        type="text"
        id="jobLocation"
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        value={jobLocation}
        onChange={(e) => handleChange('jobLocation', e.target.value)}
        required
      />
      <div className="text-red-500 mt-1 text-sm">
        {jobLocation === '' && 'Job Location is required'}
      </div>
    </div>
  );
};

export default JobDetails;
