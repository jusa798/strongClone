import Set from "./Components/Set";
import Button from "./Components/Button";
import { BsFillCheckSquareFill } from 'react-icons/bs'
import TimerHeader from "./Components/TimerHeader";

function App() {
  const titles = {
    setCol: "SET",
    prevCol: "PREVIOUS",
    kgCol: "KG",
    repsCol: "REPS"
  }
  const set1 = {
    number: 1,
    previous: "50 kg x 5",
    kg: "50",
    reps: "8",
  };
  const set2 = {
    number: 2,
    previous: "40 kg x 5",
    kg: "50",
    reps: "8",
  };
  const set3 = {
    number: 3,
    previous: "50 kg x 5",
    kg: "50",
    reps: "9",
  };

  const exercises = {
    A: "Squat (Barbell)"
  }

  const workoutNames = {
    A: "Evening workout"
  }
  
  const Cronometer = () => {
    return (
      <div>4:50</div>
    )
  }
  return (
    <div className='w-screen h-screen bg-slate-600 flex items-center justify-center'>
      <div className='w-96 h-4/6 bg-[#ffffff] rounded-lg flex-row py-4'>
        <div className='flex items-center justify-center'>
          <div className="flex flex-col">
            <TimerHeader/>
            <div className="text-sm font-bold text-base">{workoutNames.A}</div>
            <div className="text-xs font-light opacity-50">{Cronometer()}</div>
            <textarea className="w-full bg-[#e8ebea] rounded-lg my-4 text-xs p-2">Workout note...</textarea>
            <div className="text-sm text-blue-500 pt-2">{exercises.A}</div>
              <div className="w-70% h-10 flex justify-items-start items-center rounded-lg py-2 text-xs">
                <div className='opacity-50'>{titles.setCol}</div>
                <div className="pl-2 opacity-50">{titles.prevCol}</div>
                <div className="pl-9 opacity-50">{titles.kgCol}</div>
                <div className="pl-14 opacity-50">{titles.repsCol}</div>
              </div>
              <Set setData={set1} ></Set>
              <Set setData={set2}></Set>
              <Set setData={set3}></Set> 
          </div>
        </div>
         <div>
            <Button/>
          </div>
        </div>
    </div>
  );
}

export default App;
