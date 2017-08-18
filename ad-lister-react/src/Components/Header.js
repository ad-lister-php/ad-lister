import React from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';

const loggedIn = false;
const Header = () => {
	if (!loggedIn){
	return (
		<nav className='navbar navbar-default'>
			<div className='container-fluid'>
					<div className='navbar-header'>
						<p className='navbar-brand'>Ad-Lister</p>
						<button 
						onClick={
							()=>{
								$('#navbar-container').slideToggle(200);
							}
						}
						type="button" 
						className="navbar-toggle" 
						data-toggle="collapse" 
						data-target=".navbar-collapse">
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					    </button>
					</div>
				<div id='navbar-container' className='collapse navbar-collapse'>
					<div className='navbar-left'>
						<NavLink className='navbar-left btn btn-primary navbar-btn' to='/' exact activeClassName='active'>Home</NavLink>
					</div>
					<div>
{/*=============Search form================*/}
					    <form className="navbar-form navbar-right">
					        <div className="form-group input-group">
					            <input type="text" className="form-control" placeholder="Search Postings" />
					            <span className='input-group-btn'>
					        		<button type="submit" className="btn btn-default">Search</button>
					        	</span>
					        </div>
					    </form>
					</div>
					<div className='navbar-right'>
						<p
						onClick={
							() => {
								$('#login').fadeOut(1);
								$('#register').fadeIn(300);
							}
						} 
						className='navbar-text'>Register</p>
						<p 
						onClick={
							() => {
								$('#register').fadeOut(1);
								$('#login').fadeIn(300);
							}
						}
						className='navbar-text'>Login</p>
					</div>
				</div>
			</div>
		</nav>

		);
	} else {
return (
		<nav className='navbar navbar-default'>
			<div className='container-fluid'>
					<div className='navbar-header'>
						<p className='navbar-brand'>Ad-Lister</p>
						<button 
						onClick={
							()=>{
								$('#navbar-container').slideToggle(200);
							}
						}
						type="button" 
						className="navbar-toggle" 
						data-toggle="collapse" 
						data-target=".navbar-collapse">
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					    </button>
					</div>
				<div id='navbar-container' className='collapse navbar-collapse'>
					<div className='navbar-left'>
						<NavLink className='navbar-left btn btn-primary navbar-btn' to='/' exact activeClassName='active'>Home</NavLink>
					</div>
					<div>
{/*=============Search form================*/}
					    <form className="navbar-form navbar-right">
					        <div className="form-group input-group">
					            <input type="text" className="form-control" placeholder="Search Postings" />
					            <span className='input-group-btn'>
					        		<button type="submit" className="btn btn-default">Search</button>
					        	</span>
					        </div>
					    </form>
					</div>
					<div className='navbar-right'>
						<p

						className='navbar-text'>Profile</p>
						<p 

						className='navbar-text'>Logout</p>
					</div>
				</div>
			</div>
		</nav>

		);	
	}
}

export default Header;