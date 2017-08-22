import React, {Component} from 'react';
import AdContainer from './AdContainer';
import ProfileDash from './ProfileDash';


class ProfilePage extends Component{
	constructor(props){
		super(props);

	}
	render(){
		return (
			<div>
				<ProfileDash />
				<AdContainer
				username={this.props.username}
				/>
			</div>
		);
	}
}

export default ProfilePage;