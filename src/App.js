import Exercise from './Components/Exercise';
import { BsFillCheckSquareFill, BsListTask } from 'react-icons/bs';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import TimerHeader from './Components/TimerHeader';
import { useState } from 'react';

function App() {
	const [workouts, setWorkouts] = useState({});

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
			<div className='w-96 h-fit bg-[#ffffff] rounded-lg flex-row py-4'>
				<div className='flex flex-col items-center justify-center'>
					<div className='flex flex-col'>
						<TimerHeader />
						<div className='text-sm font-bold text-base'></div>
						<div className='text-xs font-light opacity-50'>{Cronometer()}</div>
						<textarea className='w-full bg-[#e8ebea] rounded-lg my-4 text-xs p-2'>
							Workout note...
						</textarea>
						<div className='text-sm text-blue-500 pt-2'></div>
						<Exercise cb={handleWorkout} exerciseName='Squat' />
						<Exercise cb={handleWorkout} exerciseName='Bench press' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
