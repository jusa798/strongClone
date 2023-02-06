import Set from "./Components/Set";
function App() {
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
    hola: "chao",
  };

  return (
    <div className='w-screen h-screen bg-slate-600 flex flex-col items-center justify-center'>
      <div className='w-96 h-96 bg-slate-200 rounded-lg flex flex-col items-center justify-center'>
        <Set setData={set1}></Set>
        <Set setData={set2}></Set>
        <Set setData={set3}></Set>
      </div>
    </div>
  );
}

export default App;
