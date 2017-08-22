import React from 'react';


const DeleteButton = (props) => {
	return (
		<div>
			<button 
			onClick={
				() => {
					props.delete();
				}
			}
			className='btn btn-primary'>Delete</button>
		</div>
	)
}

export default DeleteButton;