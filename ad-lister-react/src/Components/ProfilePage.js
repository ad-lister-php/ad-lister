import React from 'react';
import AdContainer from './AdContainer';

let user = "[USERNAME]'s";

const ProfilePage = () =>{
	return (
		<AdContainer
		username={user}
		/>
	);
}

export default ProfilePage;