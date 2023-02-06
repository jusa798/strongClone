import React from "react";

function Set(props) {
  return (
    <div className='w-full h-10 flex content-between justify-around'>
      <div className='text-blue-500 font-bold'>{props.setData.number}</div>
      <div className='opacity-50'>{props.setData.previous}</div>
      <div className='font-bold'>{props.setData.kg}</div>
      <div className='font-bold'>{props.setData.reps}</div>
    </div>
  );
}

export default Set;
