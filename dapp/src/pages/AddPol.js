import React from 'react'
import Form from '../components/Form'
import Header from "../components/Header";
import Gpolicy from '../components/Gpolicy';
import Balance from "../components/Balance";
import Withdraw from '../components/Withdraw';

const AddPol = () => {
  return (
    <div>
        <Header />
        <Form />
        <Gpolicy />
        <Balance />
        <Withdraw />
    </div>
  )
}

export default AddPol