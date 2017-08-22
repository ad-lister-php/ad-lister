import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import NotFound from './NotFound';

const LogRegPage = (props) => {
	return (
		<div>
			<Switch>
				<Route path='/users/login' component={() => (<Login username={props.username} setLoggedIn={props.setLoggedIn} />)} />
				<Route path='/users/register'component={() => (<Register username={props.username} setLoggedIn={props.setLoggedIn} />)} />
				<Route component={NotFound}/>
			</Switch>
		</div>
	);
}

export default LogRegPage;