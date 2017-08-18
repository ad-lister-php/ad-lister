import React from 'react';
import AdContainer from './AdContainer';
import ProfileDash from './ProfileDash';

let user = "[USERNAME]'s";

const ProfilePage = () =>{
	return (
		<div>
			<ProfileDash />
			<AdContainer
			username={user}
			/>
		</div>
	);
}

export default ProfilePage;