import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
// import {connect} from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);


        this.state = {

        }
        console.log(props);
    }


    render (){
        return(
            <div id='login' className='log-reg-container container-fluid'>
                <div className='login-container'>
                    <div className='form-container'>
                        <h1>Login:</h1>
                        <form method='POST'>
                            <div className='form-group input-group-lg'>
                                <input id ='username'className='form-control' type='text' name='username'placeholder='Username'  />
                                <input id='password'className='form-control' type='password' name='password' placeholder='Password' />
                                <button
                                onClick = {
                                    (e)=>{
                                        e.preventDefault();
                                        let user = $('#username').val();
                                        let pass = $('#password').val();
                                        axios.post('/api/login', {withCredentials:true}, {
                                            params:{
                                                username: user,
                                                password: pass
                                            }
                                        }).then((results)=>{
                                            if (results.data.username) {
                                                console.log(results.data.username)
                                                this.props.setLoggedIn(results.data.username);
                                            }
                                        });
                                    }
                                }
                                className='form-control btn btn-primary'
                                type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
