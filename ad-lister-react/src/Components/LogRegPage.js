import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';

const LogRegPage = (props) => {
	return (
		<div>
			<Switch>
				<Route path='/users/login' component={() => (<Login setLoggedIn={props.setLoggedIn} />)} />
				<Route path='/users/register'component={Register} />
				<Route component={NotFound}/>
			</Switch>
		</div>
	);
}

export default LogRegPage;