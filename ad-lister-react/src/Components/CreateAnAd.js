import React, {Component} from 'react';
import DefaultAd from './../img/default-ad.jpeg';



class CreateAnAd extends Component {
	constructor(props) {
		super(props);


		this.state={

		}
	}

	render(){
		return(
			<div id='create-ad'>
				<img width='25%' className='img-responsive' src={DefaultAd} />
				<form className="form-group-lg">
					<input type='text' placeholder='Name for the Listing' className='form-control' />
					<textarea className='form-control' placeholder='test'></textarea>

				</form>
			</div>
		);
	}
}

export default CreateAnAd;