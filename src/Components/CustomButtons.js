import React from "react";

function CustomButtons(props) {
  return (
    <div className='flex flex-col space-y-5 text-xs pt-3'>
      <button
        className={`${props.color ? props.color : "text-blue-500"} ${
          props.fontsize ? props.fontsize : "text-md"
        }`}
        onClick={() => props.cb()}>
        {props.content}
      </button>
    </div>
  );
}

export default CustomButtons;
