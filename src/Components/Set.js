import React from 'react';
import { useState } from 'react';

function Set(props) {
  const [setData, setSetData] = useState({
    previous: '50kg x 5',
    setNumber: 1,
  });

  const inputsHandler = (itemName, data) => {
    let currentData = setData;
    currentData[itemName] = data;
    setSetData(currentData);
  };

  return (
    <>
      <div className='w-full h-10 flex justify-around justify-center items-center rounded-lg py-2 text-xs space-x-6'>
        {/* <div className={active ? 'bg-green-500' : ''}> */}
        <div className='text-blue-500 font-bold'>{2}</div>
        <div className='opacity-50'>50kg x 10</div>
        <input
          className='bg-[#e8ebea] font-bold rounded-lg px-1 w-12 h-6 items-center align-center'
          onChange={(e) => inputsHandler('weight', e.target.value)}
        ></input>
        <div>
          <input
            className='bg-[#e8ebea] font-bold px-1 rounded-lg w-12 h-6 center'
            onChange={(e) => inputsHandler('reps', e.target.value)}
          ></input>
        </div>
        <button
          className='w-4 h-5 bg-blue-500'
          onClick={() => {
            props.cb(props.exerciseName, setData);
            // active(active);
          }}
        ></button>
        {/* </div> */}
      </div>
    </>
  );
}

export default Set;
