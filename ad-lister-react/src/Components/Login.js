import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);


        this.state = {

        }
        this.getSession();
    }

    getSession(){
        axios.get('/api/check').then(
            (response) => {
                console.log(response);
            }
        )
    }


    render (){
        return(
            <div id='login' className='container-fluid'>
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
                                        console.log(user);
                                        console.log(pass);
                                        axios.post('/api/login', {withCredentials:true}, {
                                            params:{
                                                username: user,
                                                password: pass
                                            }
                                        }).then((results)=>{
                                            console.log(results);
                                        })
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
