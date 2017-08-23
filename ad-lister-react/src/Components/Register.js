import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import ReactFilestack from 'filestack-react';
import defaultProfilePic from './../img/download.jpeg';
import $ from 'jquery';
import axios from 'axios';
// import Router from 'react-router-dom';

const fileStackURL = 'https://cdn.filestackcontent.com/';
const apikey = 'Arm3f7HJReOkjrR25yPiwz';
const fileStackOptions = {fromSources: ['local_file_system', 'url', 'imagesearch']};


class Register extends Component{
    constructor(props){
        super(props);


        this.state = {
            handle: defaultProfilePic,
            imageKey: '',
            fileStackOptions: fileStackOptions,
            apikey: 'Arm3f7HJReOkjrR25yPiwz',
            fileStackURL: 'https://cdn.filestackcontent.com/'
        }
        this.onSuccess = this.onSuccess.bind(this);
        console.log(this.props);
        // this.redirect();
    }
    redirectNewUser(){
        this.props.history.push('/users/login');
    }
    redirect(){
        if (this.props.username !== ''){
            this.props.history.push('/profile');
        }
    }

    onSuccess(results) {
        console.log('setting url...')
        console.log(results);
        let imageKey = results.filesUploaded[0].handle;
        let handle = fileStackURL + results.filesUploaded[0].handle;
        this.setState({
            imageKey: imageKey,
            handle: handle
            // imageKey: imageKey
        })
        // console.log(this.state.handle);
    }
    render(){

        return(
                <div id='register' className='container-fluid log-reg-container'>
                    <div className='login-container'>
                        <div className='form-container'>
                            <h1>Register:</h1>
                            <div>
                            </div>
                            <form >
                                <div className='form-group input-group-lg'>
                                    <div>
                                        <img alt='profile-pic' className='register-image' src={this.state.handle}/>
                                        <div className='filestack-container'>
                                            <ReactFilestack
                                              apikey={apikey}
                                              buttonText="Add a Profile Image"
                                              buttonClass="btn btn-primary filestack-button"
                                              options={this.state.fileStackOptions}
                                              onSuccess={this.onSuccess}
                                            />
                                        </div>
                                        <p id='register-error' className='login-error error'>*All form fields are required</p>
                                        <p id='password-error' className='login-error error'>*Passwords do not match</p>
                                    </div>
                                    <input id='name'name='name' required className='form-control'  placeholder='Full name' />
                                    <input id='username'name='user' required className='form-control' type='text' placeholder='Username' />
                                    <input id='email'name='email' required className='form-control' type='email'placeholder='Email' />
                                    <input id='password'name='pass' required className='form-control' type='password' placeholder='Password' />
                                    <input id='pass-confirm' name='pass-confirm' required className='form-control' type='password' placeholder='Confirm Password' />
                                    <button
                                    onClick={
                                            (e) => {
                                                e.preventDefault();
                                                $('#register-error').addClass('login-error');
                                                $('#password-error').addClass('login-error');

                                                let name = $('#name').val();
                                                let user = $('#username').val();
                                                let pass = $('#password').val();
                                                console.log(pass);
                                                let passConfirm = $('#pass-confirm').val();
                                                console.log(passConfirm);
                                                let email = $('#email').val();
                                                let image = '';
                                                if (this.state.imageKey !== ''){
                                                    image = this.state.imageKey;
                                                } else {
                                                    image = 'default';
                                                }

                                                if (name === '' ||
                                                    user === '' ||
                                                    pass === '' ||
                                                    email === '') {

                                                    $('#register-error').removeClass('login-error');

                                                } else if (pass !== passConfirm) {

                                                    $('#password-error').removeClass('login-error');

                                                } else {

                                                axios.post('/api/register', {withCredentials:true}, {
                                                    params:{
                                                        name: name,
                                                        username: user,
                                                        password: pass,
                                                        email: email,
                                                        image: image
                                                    }
                                                }).then((results)=>{
                                                    console.log(results);
                                                    if (results.data.success === true){
                                                        this.redirectNewUser();
                                                    }
                                                });


                                            }
                                        }
                                    }
                                    className='form-control btn btn-primary'
                                    type='submit'>Register</button>
                                    <p className='text-center'>Not new? login <NavLink to='/users/login' exact activeClassName='active'>Here</NavLink></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
    }
}

export default withRouter(Register);
