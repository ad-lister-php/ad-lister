import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';



class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: '',
            isLoggedIn: this.props.loggedIn,
            username:''
        }
        
    }
    componentWillMount(){
        axios.get('/api/logginCheck').then((results) => {

            

            if (results.data.IS_LOGGED_IN){
                console.log(results);
                this.props.setLoggedIn(results.data.IS_LOGGED_IN)
            }
        });
    }
    search() {

    }
    redirect(path){
        if (this.props.username !== '') {
            this.props.history.push(path);
        }
    }
    render() {
    if (!this.props.isLoggedIn.loggedIn){
        return (
            <div>
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                        <div className='navbar-header'>
                            <p className='navbar-brand'>Community</p>
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
                            <form method='GET'  
                            onSubmit={(e) => {
                                e.preventDefault();
                                let search = $('#searchbar').val();
                                this.props.search(search);
                            }}
                            className="navbar-form navbar-right">
                                <div className="form-group input-group">

                                    <input
                                    id='searchbar'
                                    name='value'
                                    type="text" className="form-control" placeholder="Search Postings" />

                                    <span 
                                    className='input-group-btn'>

                                        <span
                                        onClick={
                                            (e) => {
                                                e.preventDefault();
                                                let search = $('#searchbar').val();

                                                this.setState({
                                                    search: search
                                                })
                                                this.props.search(this.state.search);
                                            }
                                        }
                                        className="btn btn-default">Search</span>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className='navbar-right'>
                            <NavLink className='navbar-left navbar-text' to='/' exact activeClassName='active'>Home</NavLink>
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
                            <p id='brand' className='navbar-brand'>Community <small className='small'>Your Local Listings</small></p>
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
                            <form method='GET'  
                            onSubmit={(e) => {
                                e.preventDefault();
                                let search = $('#searchbar').val();
                                this.props.search(search);
                            }}
                            className="navbar-form navbar-right">
                                <div className="form-group input-group">

                                    <input
                                    id='searchbar'
                                    name='value'
                                    type="text" className="form-control" placeholder="Search Postings" />

                                    <span 
                                    className='input-group-btn'>

                                        <span
                                        onClick={
                                            (e) => {
                                                e.preventDefault();
                                                let search = $('#searchbar').val();


                                                this.props.search(search);
                                            }
                                        }
                                        className="btn btn-default">Search</span>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className='navbar-right'>
                        <NavLink className='navbar-left navbar-text' to='/' exact activeClassName='active'>Home</NavLink>
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