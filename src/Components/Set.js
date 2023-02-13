import React from 'react';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { useState } from 'react';

function Set(props) {
  return (
    <>
      <div className='w-full h-10 flex justify-around justify-center items-center rounded-lg py-2 text-xs space-x-6'>
        <div className='text-blue-500 font-bold'>{props.setData.number}</div>
        <div className='opacity-50'>{props.setData.previous}</div>
        <div>
          <input
            type='number'
            className='bg-[#e8ebea] font-bold rounded-lg px-1 w-12 h-6 items-center align-center'
            onChange={(e) => props.cb(props.inputKg(e))}
          ></input>
        </div>
        <div>
          <input
            type='number'
            className='bg-[#e8ebea] font-bold px-1 rounded-lg w-12 h-6 center'
            onChange={(e) => props.cb(props.inputReps(e))}
          ></input>
        </div>
        <button
          className='w-4 h-5 bg-blue-500'
          onClick={() => props.cb()}
        ></button>
      </div>
    </>
  );
}

export default Set;
