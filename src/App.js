import Set from './Components/Set';
import Buttons from './Components/Buttons';
import Exercise from './Components/Exercise';
import { BsFillCheckSquareFill, BsListTask } from 'react-icons/bs';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import TimerHeader from './Components/TimerHeader';
import { useState } from 'react';

function App() {
  const [workouts, setWorkouts] = useState({});

  const titles = {
    setCol: 'SET',
    prevCol: 'PREVIOUS',
    kgCol: 'KG',
    repsCol: 'REPS',
  };

  const Cronometer = () => {
    return <div>4:50</div>;
  };

  const handleWorkout = (exerciseName, setData) => {
    let currentWorkout = workouts;

    if (currentWorkout[exerciseName] === undefined) {
      currentWorkout[exerciseName] = {
        sets: [],
      };
    }

    currentWorkout[exerciseName].sets.push(setData);
    setWorkouts(currentWorkout);
    console.log(currentWorkout);
  };

  return (
    <div className='w-screen h-screen bg-slate-600 flex items-center justify-center'>
      <div className='w-96 h-4/6 bg-[#ffffff] rounded-lg flex-row py-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col'>
            <TimerHeader />
            <div className='text-sm font-bold text-base'></div>
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
            <Exercise cb={handleWorkout} exerciseName='Squat' />
            <Exercise cb={handleWorkout} exerciseName='Bench press' />
          </div>
          <Buttons></Buttons>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
