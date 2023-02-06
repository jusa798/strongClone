import React from "react";

function Button (props) {

  const listOfButtons = {
    set: "ADD SET",
    exercise: "ADD EXERCISE",
    cancel: "CANCEL WORKOUT"
  }

  return (
    <div className="flex flex-col space-y-5 text-xs pt-3">
      <button className="text-blue-500">{listOfButtons.set}</button>
      <button className="text-blue-500">{listOfButtons.exercise}</button>
      <button className="text-red-500">{listOfButtons.cancel}</button>
    </div>
  );
}

export default Button;