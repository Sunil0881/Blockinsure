import React, { useState } from 'react';
import { GETCONTRACTBALANCE } from '../ContractIntegration';


const Balance = () => {

    const [bal, setBal] = useState([]);

    const handleBuyPolicy = async () => {
        console.log("getting Balance");
        const answer = await GETCONTRACTBALANCE();
        setBal(answer);
        console.log(answer);


    }

  return (
    <div>
    <button className='border-2 bg-red-500 rounded-lg px-3 py-1 text-lg font-bold' onClick={() => handleBuyPolicy()} >Contract Balance</button>
    
    </div>
  )
}

export default Balance