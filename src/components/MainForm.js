import React, { useState } from 'react';
import RequisitionDetails from './RequisitionDetails';
import JobDetails from './JobDetails';
import InterviewSettings from './InterviewSettings';
import DraftCard from './DraftCard';

const MainForm = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFormChange = (values) => {
    setFormValues({ ...formValues, ...values });
  };

  const handleFormValidity = (isValid) => {
    setIsFormValid(isValid);
  };

  const handleNext = () => {
   
    if (isFormValid) {

      if (currentTab === 0) {
        setCurrentTab(1);
      } else if (currentTab === 1) {
       
        setCurrentTab(2);
      } else {
     
        setCurrentTab((prevTab) => Math.min(prevTab + 1, 2));

        if (currentTab === 2) {
          window.alert('Form successfully submitted!');
        }
      }
    }
  };

  const handlePrevious = () => {

    setCurrentTab((prevTab) => Math.max(0, prevTab - 1));
  };

  const tabs = ['Requisition details', 'Job details', 'Interview settings'];

  const renderForm = () => {
    switch (currentTab) {
      case 0:
        return (
          <RequisitionDetails
            onFormChange={handleFormChange}
            isValid={handleFormValidity}
          />
        );
      case 1:
        return <JobDetails onFormChange={handleFormChange} />;
      case 2:
        return <InterviewSettings onFormChange={handleFormChange} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-11/12 mx-auto my-20 flex h-screen">
    <div className="w-1/3 pr-4 space-y-6 mb-10 mt-0">
      <div className="flex">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              currentTab === index ? 'text-gray-500 border-b-2 border-gray-500' : 'text-black'
            } p-2 flex-grow text-center`}
            onClick={() => setCurrentTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      {renderForm()}
      <div className="flex justify-between mt-8">
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded ${
            currentTab === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handlePrevious}
          disabled={currentTab === 0}
        >
          Previous
        </button>
        <button
          className={`bg-green-500 text-white px-4 py-2 rounded ${
            !isFormValid && currentTab !== 2 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleNext}
          disabled={!isFormValid && currentTab !== 2}
        >
          {currentTab === 2 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
    <div className="w-2/3 flex flex-col mt-10">
      <div className="w-full mt-4">
        <DraftCard formValues={formValues} />
      </div>
    </div>
  </div>
  );
};

export default MainForm;
