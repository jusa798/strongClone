import React from "react";
import { CiTimer } from 'react-icons/ci'
import { SlArrowDown } from 'react-icons/sl'

function TimerHeader (props) {
  return (
    <div className="flex flex-row space-x-20 text-sm border-b-4 border-grey-200 pb-2 mb-5">
      <button className=""><SlArrowDown/></button>
      <button className=""><CiTimer/></button>
      <button className="text-blue-500">FINISH</button>
    </div>
  );
}

export default TimerHeader;