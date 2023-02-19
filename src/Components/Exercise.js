import React from 'react';
import Set from '../Components/Set';
import { useState } from 'react';

function Exercise(props) {
  const set1 = {
    number: 1,
    previous: '50kg x 5',
    kg: '50',
    reps: '5',
  };

  const set2 = {
    number: 2,
    previous: '50kg x 5',
    kg: '50',
    reps: '5',
  };

  return (
    <>
      <div>{props.exerciseName}</div>
      <Set setData={set1} cb={props.cb} exerciseName={props.exerciseName}></Set>
      <Set setData={set2} cb={props.cb} exerciseName={props.exerciseName}></Set>
    </>
  );
}

export default Exercise;
