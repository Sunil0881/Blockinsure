import React, { useState } from 'react';
import { WITHDRAW } from '../ContractIntegration';


const Withdraw = () => {

    const [amount, setAmount] = useState('');

    const handleClick = async () => {
        console.log("Withdrawing Balance..");
        const answer = await WITHDRAW(amount);
        console.log(answer);


    }

    const handleNameChange = (event) => {
        setAmount(event.target.value);
    };


    return (
        <div>
            <div className="mb-4">
                <label className="block text-gray-700">Withdraw Amount</label>
                <input type="number" name={amount} onChange={handleNameChange} className="form-input mt-1 block w-full rounded-md border-gray-300" />
            </div>
            <button className='border-2 bg-red-500 rounded-lg px-3 py-1 text-lg font-bold' onClick={() => handleClick(amount)} >Withdraw Balance</button>

        </div>
    )
}

export default Withdraw