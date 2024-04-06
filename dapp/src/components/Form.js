import React, { useState } from 'react';
import { ADDPOLICY } from '../ContractIntegration.js';

const Form = () => {
  const [policyName, setPolicyName] = useState('');
  const [id, setId] = useState('');
  const [policyDetails, setPolicyDetails] = useState('');
  const [coverageAmount, setCoverageAmount] = useState(0);
  const [premiumAmount, setPremiumAmount] = useState(0);
  const [durationYears, setDurationYears] = useState(0);

  const handleNameChange = (event) => {
    setPolicyName(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setPolicyDetails(event.target.value);
  };

  const handleCoverageChange = (event) => {
    setCoverageAmount(event.target.value);
  };

  const handlePremiumChange = (event) => {
    setPremiumAmount(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDurationYears(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("button clicked");
    const tokenId = await ADDPOLICY( id, policyName, policyDetails, coverageAmount, premiumAmount, durationYears ); // Pass parameters as an object
    console.log("id", id);
    console.log("name", policyName);
    console.log("msg",  policyDetails);
    console.log("msg", coverageAmount);
    console.log("msg", premiumAmount);
    console.log("msg",  durationYears );
    console.log("tokenID:", tokenId);
  };
  


  return (
    <form  className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
  <div className="mb-4">
    <label className="block text-gray-700">Policy Name:</label>
    <input type="text" name={policyName} onChange={handleNameChange} className="form-input mt-1 block w-full rounded-md border-gray-300" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700">ID:</label>
    <input type="number" name={id} onChange={handleIdChange} className="form-input mt-1 block w-full rounded-md border-gray-300" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700">Policy Details:</label>
    <input type="text" name={policyDetails} onChange={handleDetailsChange} className="form-input mt-1 block w-full rounded-md border-gray-300" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700">Coverage Amount:</label>
    <input type="number" name={coverageAmount} onChange={handleCoverageChange} className="form-input mt-1 block w-full rounded-md border-gray-300" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700">Premium Amount:</label>
    <input type="number" name={premiumAmount} onChange={handlePremiumChange} className="form-input mt-1 block w-full rounded-md border-gray-300" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700">Duration (Years):</label>
    <input type="number" name={durationYears} onChange={handleDurationChange} className="form-input mt-1 block w-full rounded-md border-gray-300" />
  </div>
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
</form>


  );
}

export default Form;
