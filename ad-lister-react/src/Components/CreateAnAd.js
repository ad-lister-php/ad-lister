import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import DefaultAd from './../img/default-ad.jpeg';
import ReactFilestack from 'filestack-react';
import $ from 'jquery';
import axios from 'axios';


const fileStackURL = 'https://cdn.filestackcontent.com/';
const apikey = 'Arm3f7HJReOkjrR25yPiwz';
const fileStackOptions = {
	fromSources: ['local_file_system', 'url', 'imagesearch'],
	maxFiles: 1
};
class CreateAnAd extends Component {
	constructor(props) {
		super(props);


        this.state = {
        	imageKey: '',
            handle: DefaultAd,
            fileStackOptions: fileStackOptions,
            apikey: 'Arm3f7HJReOkjrR25yPiwz',
            fileStackURL: 'https://cdn.filestackcontent.com/'
        }
        this.onSuccess = this.onSuccess.bind(this);
        console.log(props);
	}
    onSuccess(results) {
        console.log('setting url...')
        console.log(results);
        let imageKey = results.filesUploaded[0].handle;
        let handle = fileStackURL + results.filesUploaded[0].handle;
        this.setState({
        	imageKey: imageKey,
            handle: handle
        })
        console.log(this.state.handle);
    }
	render(props){
		let adImage = ''
		if(!this.state.imageKey) {
			adImage = DefaultAd;
		} else {
			adImage = this.state.handle
		}

		return(
			<div id='create-ad'>
				<div className='loading-target display-none'>
					<span className='glyphicon glyphicon-refresh spinning'></span>
				</div>
				
					<img id='ad-form-image' alt='ad' className='ad-image img-responsive' src={adImage} />
	                <ReactFilestack
	                  apikey={apikey}
	                  buttonText="Add an Image"
	                  buttonClass="btn btn-primary filestack-button"
	                  options={this.state.fileStackOptions}
	                  onSuccess={this.onSuccess}
	                />


				<div className='ad-form'>
					<form className="form-group-lg">
						<input id='ad-form-name' type='text' placeholder='Name for the Listing' className='form-control' />
						<input id='ad-form-price' type='number' placeholder='Price in USD' className='form-control' />
						<textarea id='ad-form-desc' className='form-control' placeholder='Description'></textarea>
					</form>
				</div>
				<div>
					<div className='buttons'>
						<button 
						onClick={
								() => {
								$('.loading-target').toggleClass('display-none');
								
								axios.get('/api/createAd', {
									params: {
										seller: this.props.username,
										title: $('#ad-form-name').val(),
										price: $('#ad-form-price').val(),
										desc: $('#ad-form-desc').val(),
										location: '',
										image: this.state.imageKey
									}
								}).then((results) => {
									this.props.history.push('/profile');
								})


								}
							}
						
						className='btn btn-success'>Submit</button>
						<button 
						onClick={
							() => {
								$('#create-ad').fadeToggle(200);
								$('.ad-container').toggleClass('opacity');

							}
						}
						className='btn btn-danger'>Cancel</button>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(CreateAnAd);