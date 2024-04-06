import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import Button from './Button';
export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);
  function pathMatchRoute(route){
    if (route === location.pathname){
      return true;
    }
  }

  return (
    <div>
      <header className='flex justify-between items-center px-3 mx-auto bg-white border-b shadow-sm sticky top-0 z-40 pb-4 '>
        <div>
          <h1 className='h-5 cursor-pointer text-4xl pb-4 text-blue-900 font-extrabold' 
          onClick={()=>navigate("/")}>BlockInsure</h1>
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li className={`cursor-pointer text-sm py-3 font-bold text-gray-400 border-b-[3px] border-b-transparent 
            ${pathMatchRoute("/") && "text-zinc-950 border-b-red-500"}`} 
            onClick={()=>
            navigate("/")}>Home</li>
            <li className={`cursor-pointer text-sm py-3 font-bold text-gray-400 border-b-[3px] border-b-transparent 
            ${pathMatchRoute("/policy") && "text-zinc-950 border-b-red-500"}`} 
            onClick={()=> 
            navigate("/policy")} >Policy</li>
            <li className={`cursor-pointer text-sm py-3 font-bold text-gray-400 border-b-[3px] border-b-transparent
            ${pathMatchRoute("/claim") && "text-zinc-950 border-b-red-500"}`}             
            onClick={()=>
            navigate("/claim")} >Claim</li>
            
          </ul>

         
          
        </div>
        <Button />
      </header>
    </div>
  )
}
 