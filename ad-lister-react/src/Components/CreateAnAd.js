import React, {Component} from 'react';
import DefaultAd from './../img/default-ad.jpeg';
import ReactFilestack from 'filestack-react';
import $ from 'jquery';


const fileStackURL = 'https://cdn.filestackcontent.com/';
const apikey = 'Arm3f7HJReOkjrR25yPiwz';
const fileStackOptions = {fromSources: ['local_file_system', 'url', 'imagesearch']};
class CreateAnAd extends Component {
	constructor(props) {
		super(props);


        this.state = {
            handle: DefaultAd,
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
			<div id='create-ad'>
				<div className='loading-target display-none'>
					<span className='glyphicon glyphicon-refresh spinning'></span>
				</div>
				<div className='ad-image-container'>
					<img id='ad-form-image' alt='ad' className='ad-image' src={DefaultAd} />
	                <ReactFilestack
	                  apikey={apikey}
	                  buttonText="Add an Image"
	                  buttonClass="btn btn-primary filestack-button"
	                  options={this.state.fileStackOptions}
	                  onSuccess={this.onSuccess}
	                />
				</div>

				<div className='ad-form'>
					<form className="form-group-lg">
						<input id='ad-form-name' type='text' placeholder='Name for the Listing' className='form-control' />
						<textarea id='ad-form-desc' className='form-control' placeholder='test'></textarea>
					</form>
				</div>
				<div>
					<button 
					onClick={
						() => {
							console.log({
								name: $('#ad-form-name').val(),
								desc: $('#ad-form-desc').val()
							});
							$('.loading-target').toggleClass('display-none');
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
		);
	}
}

export default CreateAnAd;