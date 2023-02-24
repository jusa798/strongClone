import React from 'react';

function CustomButtons(props) {
	return (
		<div className='flex flex-col space-y-5 text-xs pt-3'>
			<button className='text-blue-500' onClick={() => props.cb()}>
				{props.content}
			</button>
		</div>
	);
}

export default CustomButtons;
