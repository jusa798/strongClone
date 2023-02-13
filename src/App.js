import Set from './Components/Set';
import Buttons from './Components/Buttons';
import Exercise from './Components/Exercise';
import { BsFillCheckSquareFill, BsListTask } from 'react-icons/bs';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import TimerHeader from './Components/TimerHeader';
import { useState } from 'react';

function App() {
  const [workouts, setWorkouts] = useState({});
  const [selected, setSelected] = useState('');
  const [currentExercise, setCurrentExercise] = useState();
  const [kgInput, setKgInput] = useState(0);
  const [repsInput, setRepsInput] = useState(0);
  const [set, setSet] = useState(1);

  const titles = {
    setCol: 'SET',
    prevCol: 'PREVIOUS',
    kgCol: 'KG',
    repsCol: 'REPS',
  };

  const set1 = {
    number: 1,
    previous: [kgInput, repsInput],
    kg: kgInput,
    reps: repsInput,
  };

  const set2 = {
    number: 2,
    previous: [kgInput, repsInput],
    kg: kgInput,
    reps: repsInput,
  };
  const set3 = {
    number: 3,
    previous: [kgInput, repsInput],
    kg: kgInput,
    reps: repsInput,
  };

  const e1 = {
    name: 'Squat',
    set1,
    set2,
    set3,
  };
  const e2 = {
    name: 'Bench Press',
    set1,
    set2,
    set3,
  };
  const e3 = {
    name: 'Hip Trust',
    set1,
    set2,
    set3,
  };

  const workoutsMap = [e1, e2, e3];

  // const workoutsMap = {
  //   exercises: [e1, e2, e3],
  // };

  const Cronometer = () => {
    return <div>4:50</div>;
  };

  const selectingExerciseHandler = (e) => {
    setSelected(e.target.value);
    if (selected === workouts[0].name) {
      setCurrentExercise(workouts[0]);
    }
    // } else {
    //   if (selected === workouts[1].name) {
    //     setCurrentExercise(workouts[1]);
    //   } else {
    //     if (selected === workouts[1].name) {
    //       setCurrentExercise(workouts[1]);
    //     }
    //   }
  };

  const handleInputKg = (e) => {
    let inputKGtoStore = parseInt(e.target.value);
    setKgInput(inputKGtoStore);
  };
  const handleInputReps = (e) => {
    let inputRepstoStore = parseInt(e.target.value);
    setRepsInput(inputRepstoStore);
  };

  const handleWorkout = () => {
    setWorkouts(workoutsMap);
    workouts[0].set1.kg = kgInput;
    workouts[0].set1.reps = repsInput;
  };

  // const addingSets = () =>{
  //   setSet((prevSet) => prevSet + 1);
  //   return (

  //   )
  // }
  return (
    <div className='w-screen h-screen bg-slate-600 flex items-center justify-center'>
      <div className='w-96 h-4/6 bg-[#ffffff] rounded-lg flex-row py-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col'>
            <TimerHeader />
            <div className='text-sm font-bold text-base'>
              <select onChange={(e) => selectingExerciseHandler(e)}>
                <option>{workoutsMap[0].name}</option>
                <option>{workoutsMap[1].name}</option>
                <option>{workoutsMap[2].name}</option>
              </select>
            </div>
            <div className='text-xs font-light opacity-50'>{Cronometer()}</div>
            <textarea className='w-full bg-[#e8ebea] rounded-lg my-4 text-xs p-2'>
              Workout note...
            </textarea>
            <div className='text-sm text-blue-500 pt-2'></div>
            <div className='w-70% h-10 flex justify-items-start items-center rounded-lg py-2 text-xs'>
              <div className='opacity-50'>{titles.setCol}</div>
              <div className='pl-2 opacity-50'>{titles.prevCol}</div>
              <div className='pl-9 opacity-50'>{titles.kgCol}</div>
              <div className='pl-14 opacity-50'>{titles.repsCol}</div>
            </div>
            <Exercise
              map={workoutsMap}
              cb={handleWorkout}
              inputKg={handleInputKg}
              inputReps={handleInputReps}
            />
          </div>
          {/* <Buttons cb={workoutDataHandler()}></Buttons> */}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;

// const workout = {
//   name: squat,
// };

// when someone clicks the check mark the data is stored in the state. Object with element exercises []

//set calls back exercise and then exe calls back app (workout). set holds the onclick
