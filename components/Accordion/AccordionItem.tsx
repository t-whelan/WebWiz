'use client'

import React from 'react'
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

export const AccordionItem = ({question, answer}: {question:string, answer:string}) => {
    const [isOpen, SetIsOpen] =React.useState(false)
const toggleIsOpen =()=>{
    SetIsOpen((prevState)=> !prevState);
};
  return<div className='p-4 bg-white shadow-sm rounded-lg cursor-pointer' onClick={toggleIsOpen}>

 <div className="flex justify-between items-center gap-4">
    <h5>{question}</h5>
    {isOpen? (
        <SlArrowUp className='text-purple-500'/> 
    ): (
     <SlArrowDown className='text-purple-500'/>
    )}
 </div> 
 {isOpen && <p className='text-gray-400 mt-2'>{answer}</p>}
 </div>
      
   
  
}


