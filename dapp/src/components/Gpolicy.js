import React, { useEffect, useState } from 'react';
import { GETALLPOLICIES } from '../ContractIntegration';
import { BUYPOLICY } from '../ContractIntegration';
import { ethers } from 'ethers';

const Gpolicy = () => {
    const [entries, setEntries] = useState([]);


    const handleBuyPolicy = async (id, premium) => {
        try {
            const premiumWei = ethers.utils.parseEther(premium.toString()); // Convert premium to Wei
            const tokenId = await BUYPOLICY(id, { value: premiumWei }); // Send premium amount in Wei with the transaction
            console.log(tokenId);

        } catch (error) {
            console.error('Error Buying Policy:', error);
        }
    };



    const get = async () => {
        console.log("getting value");
        const answer = await GETALLPOLICIES();
        if (Array.isArray(answer)) {
            const formattedEntries = answer.map(entry => ({
                Id: entry[0].toString(), // Convert BigNumber to string
                Name: entry[1],
                Detail: entry[2],
                Coverage: entry[3].toString(), // Convert BigNumber to string
                Premium: entry[4].toString(), // Convert BigNumber to string
                Duration: entry[5].toString(), // Convert BigNumber to string
                IsActive: entry[6]
            }));
            setEntries(formattedEntries);
        } else {
            console.error('Invalid answer format:', answer);
        }
    };
    
    useEffect(() => {
        get();
    }, []);

    return (
        <div className='mt-16 pb-10 bg-blue-500'>
            {entries.map((entry, index) => (
                <div className='text-md gap-2 text-center font-semibold font-mono m-3' key={index}>
                    <p>Id: {entry.Id}</p>
                    <p>Name: {entry.Name}</p>
                    <p>Detail: {entry.Detail}</p>
                    <p>Coverage: {entry.Coverage}</p>
                    <p>Premium: {entry.Premium}</p>
                    <p>Duration: {entry.Duration}</p>
                    <p>IsActive: {entry.IsActive}</p>
                    <button className='border-2 px-2 py-1 text-md rounded-lg bg-red-500' onClick={() => handleBuyPolicy(entry.Id, entry.Premium)} >Buy Policy </button>
                </div>
            ))}
        </div> 
    );
};

export default Gpolicy;
