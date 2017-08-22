import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import $ from 'jquery';
// import {connect} from 'react-redux';
// import LoginStatus from './../reducers/reducer_set_logged_in.js';

// const loggedIn = false;
class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: this.props.loggedIn,
            username:''
        }
        console.log(this.props);
        // this.setLoggedIn = this.setLoggedIn.bind(this);
        console.log('Header state: ' + this.state.isLoggedIn);
    }
    redirect(path){
        if (this.props.username != '') {
            this.props.history.push(path);
        }
    }
    render() {
        console.log(this.props.isLoggedIn);
    if (!this.props.isLoggedIn.loggedIn){
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
                        <NavLink to='/profile' exact activeClassName='active'><p className='navbar-text'>Profile</p></NavLink>
                        <p 
                        onClick={() => {
                            this.props.logOut()
                            this.redirect('/')
                        }}
                        className='navbar-text'>Logout</p>
                        </div>
                    </div>
                </div>
            </nav>

            );
        }
    }
}
export default withRouter(Header);