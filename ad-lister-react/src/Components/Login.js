import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
// import $ from 'jquery';

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
                        <form>
                            <div className='form-group input-group-lg'>
                                <input className='form-control' type='text' placeholder='Username' />
                                <input className='form-control' type='password' placeholder='Password' />
                                <button

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