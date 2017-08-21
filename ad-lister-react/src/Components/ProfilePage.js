import React from 'react';
import AdContainer from './AdContainer';
import ProfileDash from './ProfileDash';

// let user = "[USERNAME]'s";

const ProfilePage = (props) =>{
	return (
		<div>
			<ProfileDash />
			<AdContainer
			username={props.username}
			/>
		</div>
	);
}

export default ProfilePage;