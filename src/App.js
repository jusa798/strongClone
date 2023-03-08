import Exercise from './Components/Exercise';
import TimerHeader from './Components/TimerHeader';
import { useState } from 'react';
import CustomButtons from './Components/CustomButtons';

function App() {
  const [workouts, setWorkouts] = useState({});
  const [exercises, setExercises] = useState([
    'Bench Press',
    'Squat',
    'Hip Thrust',
  ]);

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

  const handleAddExercise = () => {
    setExercises([...exercises, 'Hip Thrust']);
  };

  const handleRemoveExercise = (exerciseName) => {
    let exercisesArray = exercises;
    let exerciseNameVar = exerciseName;
    let filteredArray = exercisesArray.filter(
      (exercise) => exercise !== exerciseNameVar
    );
    console.log(filteredArray);
    setExercises(filteredArray);
  };

  return (
    <div className='w-screen h-screen bg-slate-600 flex items-center justify-center'>
      <div className='w-96 h-full md:h-3/4 bg-[#ffffff] rounded-lg flex-row p-8 overflow-x-hidden'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col'>
            <TimerHeader />
            <div className='text-sm font-bold text-base'></div>
            <div className='text-xs font-light opacity-50'>{Cronometer()}</div>
            <textarea className='w-full bg-[#e8ebea] rounded-lg my-4 text-xs p-2'>
              Workout note...
            </textarea>
            <div className='text-sm text-blue-500 pt-2'></div>

            {exercises.map((exerciseName) => {
              return (
                <Exercise
                  cb={handleWorkout}
                  exerciseName={exerciseName}
                  color={'text-blue-500'}
                  removeExerciseCB={handleRemoveExercise}
                />
              );
            })}
          </div>
        </div>
        <CustomButtons
          content={'ADD EXERCISE'}
          fontsize={'text-lg'}
          color={'text-green-600'}
          cb={() => handleAddExercise()}
        />
      </div>
    </div>
  );
}

export default App;
