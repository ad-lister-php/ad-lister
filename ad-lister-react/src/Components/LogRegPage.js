import React from 'react';
import {Route, Router,  Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';

const LogRegPage = () => {
	return (
		<div>
			<Switch>
				<Route path='/users/login' component={Login} />
				<Route path='/users/register'component={Register} />
				<Route component={NotFound}/>
			</Switch>
		</div>
	);
}

export default LogRegPage;