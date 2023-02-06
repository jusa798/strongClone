import React from "react";
import { BsFillCheckSquareFill } from 'react-icons/bs'


function Set(props) {
  return (
    <>
    <div className='w-full h-10 flex justify-around justify-center items-center rounded-lg py-2 text-xs space-x-6'>
      <div className='text-blue-500 font-bold'>{props.setData.number}</div>       
      <div className='opacity-50'>{props.setData.previous}</div>
      <div className='bg-[#e8ebea] font-bold px-5 rounded-lg '>{props.setData.kg}</div>
      <div className='bg-[#e8ebea] font-bold px-5 rounded-lg'>{props.setData.reps}</div>
      <BsFillCheckSquareFill></BsFillCheckSquareFill>
    </div>
    </>
  );
}


export default Set;
