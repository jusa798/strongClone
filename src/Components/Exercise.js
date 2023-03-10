import React from 'react';
import Set from '../Components/Set';
import CustomButtons from '../Components/CustomButtons';
import { useState } from 'react';

function Exercise(props) {
  const [numSets, setNumSets] = useState([1, 2]);
  const [oneSetLeft, setOneSetLeft] = useState(false);

  const titles = {
    setCol: 'SET',
    prevCol: 'PREVIOUS',
    kgCol: 'KG',
    repsCol: 'REPS',
  };

  const addSetHandler = () => {
    if (oneSetLeft == true) {
      setOneSetLeft(false);
    }
    setNumSets([...numSets, numSets.length + 1]);
  };

  const removeSetHandler = () => {
    if (numSets.length > 1) {
      setNumSets(numSets.splice(0, numSets.length - 1));
    }

    if (numSets.length == 1) {
      setOneSetLeft(true);
    }
  };

  return (
    <>
      <div>{props.exerciseName}</div>
      <div className='w-70% h-10 flex justify-items-start items-center rounded-lg py-2 text-xs'>
        <div className='opacity-50'>{titles.setCol}</div>
        <div className='pl-2 opacity-50'>{titles.prevCol}</div>
        <div className='pl-9 opacity-50'>{titles.kgCol}</div>
        <div className='pl-14 opacity-50'>{titles.repsCol}</div>
      </div>
      <div>
        {numSets.map((integer) => {
          return (
            <Set
              setNumber={integer}
              cb={props.cb}
              exerciseName={props.exerciseName}></Set>
          );
        })}
      </div>
      <div className='flex flex-col'>
        <CustomButtons content={'ADD SET'} cb={addSetHandler}></CustomButtons>
        <CustomButtons
          content={`${oneSetLeft ? 'REMOVE EXERCISE' : 'REMOVE SET'}`}
          cb={removeSetHandler}></CustomButtons>
      </div>
    </>
  );
}

export default Exercise;
