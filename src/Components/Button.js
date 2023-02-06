import React from "react";

function Button (props) {
  return (
    <div className="flex flex-col space-y-5 text-xs pt-3">
      <button className="text-blue-500">{props.buttons.set}</button>
      <button className="text-blue-500">{props.buttons.exercise}</button>
      <button className="text-red-500">{props.buttons.cancel}</button>
    </div>
  );
}

export default Button;