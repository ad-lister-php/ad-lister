import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Login from './Login';
import Register from './Register';



const PrimaryLayout = () => {
	return (
		<div>
			<Header />
			<main className='main'>
				<Login />
				<Register />
				<Route path='/' exact component={Main} />
			</main>
		</div>
	)
}
export default PrimaryLayout;