import React from 'react';
import Set from '../Components/Set';
import { useState } from 'react';

function Exercise(props) {
  const set1 = {
    number: 1,
    previous: [props.kgInput, props.repsInput],
    kg: props.kgInput,
    reps: props.repsInput,
  };

  const set2 = {
    number: 2,
    previous: [props.kgInput, props.repsInput],
    kg: props.kgInput,
    reps: props.repsInput,
  };
  const set3 = {
    number: 3,
    previous: [props.kgInput, props.repsInput],
    kg: props.kgInput,
    reps: props.repsInput,
  };

  return (
    <>
      <Set
        setData={set1}
        cb={props.cb}
        inputKg={props.inputKg}
        inputReps={props.inputReps}
      ></Set>
      <Set
        setData={set2}
        cb={props.cb}
        inputKg={props.inputKg}
        inputReps={props.inputReps}
      ></Set>
      <Set
        setData={set3}
        cb={props.cb}
        inputKg={props.inputKg}
        inputReps={props.inputReps}
      ></Set>
    </>
  );
}

export default Exercise;

// const exercise1 = {
//   name: 'Squats',
//   sets: [set1, set2, set3],
// };
// const exercise2 = {
//   name: 'Bench press',
//   sets: [set1, set2, set3],
// };

// const exercisesArray = [exercise1, exercise2];
