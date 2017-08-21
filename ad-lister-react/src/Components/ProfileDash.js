import React from 'react';
import CreateAnAd from './CreateAnAd';
import $ from 'jquery';


const ProfileDash = () => {
	return (
		<div>
			<div className='profile-dash text-center'>
				<p
				onClick={
					() => {
						$('#create-ad').fadeToggle(200);
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