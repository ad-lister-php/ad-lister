import React from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import Login from './Login';
import Register from './Register';

const loggedIn = true;
const Header = () => {
    if (!loggedIn){
    return (
        <div>
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
                        <NavLink className='navbar-text' to='/users/register' exact activeClassName='active'><p>Register</p></NavLink>
                        <NavLink className='navbar-text' to='/users/login' exact activeClassName='active'><p>Login</p></NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </div>
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
                    <div className='navbar-left'>
                        <NavLink className='navbar-left btn btn-primary navbar-btn' to='/' exact activeClassName='active'>Home</NavLink>
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