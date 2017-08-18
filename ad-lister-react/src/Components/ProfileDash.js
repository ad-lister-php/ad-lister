import React from 'react';
import CreateAnAd from './CreateAnAd';
import $ from 'jquery';


const ProfileDash = () => {
	return (
		<div>
			<div className='profile-dash'>
				<p 
				onClick={
					() => {
						$('#create-ad').fadeToggle(400);
						$('.ad-container').toggleClass('opacity');

					}
				}
				className='btn btn-danger'>Create an Ad</p>
			</div>
			<CreateAnAd />
		</div>
	);
}

export default ProfileDash;