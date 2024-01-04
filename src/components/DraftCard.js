import React from 'react';

const SubCard = ({ title, children }) => (
  <div className="bg-white p-4 rounded-md shadow-md mb-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const DraftCard = ({ formValues }) => {
  const {
    requisitionTitle,
    numberOfOpenings,
    urgency,
    gender,
    jobTitle,
    jobDetails,
    jobLocation,
    interviewDuration,
    interviewMode,
    interviewLanguage,
  } = formValues;

  return (
    <div className="bg-gray-100 p-4 rounded-md space-y-6">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold">Draft</div>
          <div className="text-lg font-bold">Preview</div>
        </div>

        <div className='flex justify-between bg-gray-400 '>
         <div>{requisitionTitle}</div>
         <div> Openings{numberOfOpenings}</div>
        </div>

        <SubCard title="Requisition Details">
          <div className="flex space-x-14">
            <div className="flex flex-col">
              <div>Urgency</div>
              <div>{urgency}</div>
            </div>

            <div className="flex flex-col">
              <div>Gender</div>
              <div>{gender}</div>
            </div>
          </div>
        </SubCard>

        <SubCard title="Job Details">
          <div className="flex space-x-14">
            <div className="flex flex-col">
              <div>Job Title</div>
              <div>{jobTitle}</div>
            </div>

            <div className="flex flex-col">
              <div>Job Details</div>
              <div>{jobDetails}</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>Job Location</div>
            <div>{jobLocation}</div>
          </div>
        </SubCard>

        <SubCard title="Interview Settings">
          <div className="flex space-x-14">
            <div className="flex flex-col">
              <div>Interview Duration</div>
              <div>{interviewDuration}</div>
            </div>

            <div className="flex flex-col">
              <div>Interview Mode</div>
              <div>{interviewMode}</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>Interview Language</div>
            <div>{interviewLanguage}</div>
          </div>
        </SubCard>
      </div>
    </div>
  );
};

export default DraftCard;
