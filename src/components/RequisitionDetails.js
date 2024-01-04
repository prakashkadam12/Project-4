import React, { useState, useRef, useEffect } from 'react';


const RequisitionDetails = ({ onFormChange, isValid }) => {
  const [requisitionTitle, setRequisitionTitle] = useState('');
  const [numberOfOpenings, setNumberOfOpenings] = useState('');
  const [gender, setGender] = useState('');
  const [urgency, setUrgency] = useState('');
  const formRef = useRef();

  const handleChange = (field, value) => {
    switch (field) {
      case 'requisitionTitle':
        setRequisitionTitle(value);
        break;
      case 'numberOfOpenings':
        setNumberOfOpenings(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'urgency':
        setUrgency(value);
        break;
      default:
        break;
    }

    
    onFormChange({
      requisitionTitle,
      numberOfOpenings,
      gender,
      urgency,
    });

    
    isValid(formRef.current.checkValidity());
  };

  useEffect(() => {
 
    isValid(formRef.current.checkValidity());
  }, [isValid]);

  return (
    <form ref={formRef}>
      <div>
        <label htmlFor="requisitionTitle" className="block text-sm font-medium text-gray-700">
          Requisition Title:
        </label>
        <input
          type="text"
          id="requisitionTitle"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={requisitionTitle}
          onChange={(e) => handleChange('requisitionTitle', e.target.value)}
          required
        />
        <div className="text-red-500 mt-1 text-sm">
          {formRef.current && formRef.current['requisitionTitle'].validationMessage}
        </div>

        <label htmlFor="numberOfOpenings" className="block mt-4 text-sm font-medium text-gray-700">
          Number of Openings:
        </label>
        <input
          type="number"
          id="numberOfOpenings"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={numberOfOpenings}
          onChange={(e) => handleChange('numberOfOpenings', e.target.value)}
          required
        />
        <div className="text-red-500 mt-1 text-sm">
          {formRef.current && formRef.current['numberOfOpenings'].validationMessage}
        </div>

        <label htmlFor="gender" className="block mt-4 text-sm font-medium text-gray-700">
          Gender:
        </label>
        <select
          id="gender"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={gender}
          onChange={(e) => handleChange('gender', e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className="text-red-500 mt-1 text-sm">
          {formRef.current && formRef.current['gender'].validationMessage}
        </div>

        <label htmlFor="urgency" className="block mt-4 text-sm font-medium text-gray-700">
          Urgency:
        </label>
        <select
          id="urgency"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={urgency}
          onChange={(e) => handleChange('urgency', e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select Urgency
          </option>
          <option value="urgent">Urgent</option>
          <option value="immediateJoining">Immediate Joining</option>
          <option value="relaxed">Relaxed</option>
        </select>
        <div className="text-red-500 mt-1 text-sm">
          {formRef.current && formRef.current['urgency'].validationMessage}
        </div>
      </div>
    </form>
  );
};

export default RequisitionDetails;
