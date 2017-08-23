import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import AdContainer from './AdContainer';
import ProfileDash from './ProfileDash';



class ProfilePage extends Component{
	constructor(props){
		super(props);

		this.redirect();
	}
	redirect(){
		if (this.props.username === '') {
			this.props.history.push('/');
		}
	}
	render(){
		return (
			<div>
				<ProfileDash 
				username={this.props.username} />
				<AdContainer
				profile={'loggedIn'}
				username={this.props.username}
				/>
			</div>
		);
	}
}

export default withRouter(ProfilePage);