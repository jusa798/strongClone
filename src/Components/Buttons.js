import React from 'react';

function Buttons(props) {
  const listOfButtons = {
    set: 'ADD SET',
    exercise: 'ADD EXERCISE',
    cancel: 'CANCEL WORKOUT',
  };

  return (
    <div className='flex flex-col space-y-5 text-xs pt-3'>
      <button className='text-blue-500' onClick={() => props.cb()}>
        {listOfButtons.set}
      </button>
      <button className='text-blue-500' onClick={() => props.cb()}>
        {listOfButtons.exercise}
      </button>
      <button className='text-blue-500' onClick={() => props.cb()}>
        {listOfButtons.cancel}
      </button>
    </div>
  );
}

export default Buttons;
