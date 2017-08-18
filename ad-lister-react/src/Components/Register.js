import React, {Component} from 'react';
import $ from 'jquery';
import ReactFilestack from 'filestack-react';
import defaultProfilePic from './../img/download.jpeg';

const fileStackURL = 'https://cdn.filestackcontent.com/';
const apikey = 'Arm3f7HJReOkjrR25yPiwz';
const fileStackOptions = {fromSources: ['local_file_system', 'url', 'imagesearch']};


class Register extends Component{
    constructor(props){
        super(props);


        this.state = {
            handle: defaultProfilePic,
            fileStackOptions: fileStackOptions,
            apikey: 'Arm3f7HJReOkjrR25yPiwz',
            fileStackURL: 'https://cdn.filestackcontent.com/'
        }
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess(results) {
        console.log('setting url...')
        console.log(results);
        let handle = fileStackURL + results.filesUploaded[0].handle;
        this.setState({
            handle: handle
        })
        console.log(this.state.handle);
    }
    render(){

        return(
                <div id='register' className='container-fluid'>
                    <div className='login-container'>
                        <div className='form-container'>
                            <h1>Register:</h1>
                            <form >
                                <div className='form-group input-group-lg'>
                                    <div>
                                        <img className='register-image' src={this.state.handle}/>
                                        <ReactFilestack
                                          apikey={apikey}
                                          buttonText="Add a Profile Image"
                                          buttonClass="btn btn-primary"
                                          options={this.state.fileStackOptions}
                                          onSuccess={this.onSuccess}
                                        />
                                    </div>
                                    <input name='user' required className='form-control' type='text' placeholder='Name' />
                                    <input name='email' required className='form-control' type='email'placeholder='Email' />
                                    <input name='pass' required className='form-control' type='password' placeholder='Password' />
                                    {/*<input name='pass-confirm' required className='form-control' type='password' placeholder='Confirm Password' />*/}
                                    <button

                                    className='form-control btn btn-primary' 
                                    type='submit'>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Register;