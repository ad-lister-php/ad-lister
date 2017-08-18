import React from 'react';
import $ from 'jquery';

const Register = () => {
	return(
			<div id='register' className='container-fluid'>
				<div className='login-container'>
					<button 
					onClick={
						() => {
							$('#register').fadeOut(300);
						}
					}
					className='close-button' 
					type='button' 
					class='close'>×</button>
					<div className='form-container'>
						<h1>Register:</h1>
						<form>
							<div className='form-group input-group-lg'>
								<input className='form-control' type='text' placeholder='Username' />
								<input className='form-control' type='password' placeholder='Password' />
							</div>
						</form>
					</div>
				</div>
			</div>
		);
}

export default Register;