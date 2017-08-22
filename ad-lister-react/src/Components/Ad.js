import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import DefaultAd from './../img/default-ad.jpeg';
import $ from 'jquery'
import {Route} from 'react-router';
import DeleteButton from './DeleteButton';

class Ad extends Component{
	constructor(props){
		super(props);

		this.state = {
			width: '',
			height:''
		}
		this.delete = this.delete.bind(this);
	}

	delete(props){
		let confirmation = window.confirm('Are you sure you want to delete this ad?');
		if(confirmation){
			console.log(this.props);
		}

	}
	render(){
		let img = '';
		let price = '';
		let id = '#' + this.props.id;
		console.log(id);
		if (!this.props.img) {
			img = DefaultAd;
		} else {
			img = 'https://cdn.filestackcontent.com/' + this.props.img;
		}

		if (!this.props.price){
			price = '2.50';
		} else {
			price = this.props.price;
		}
	    return (
	        <div
	        id={this.props.id}
	        className='ad col-md-4'>

	        <Route path='/profile' component={() => (<DeleteButton delete={this.delete} />)} />
	            <div className='flex-footer'>
		            <p>{this.props.desc}</p>
		            <span
		            onClick={
		            	() => {

							console.log(findDOMNode(this));

		            	}
		            }
		            id='ad-expand' className='v-align glyphicon glyphicon-resize-full' />
	            </div>
	            <img 
	            alt='ad' className='img-responsive ad-image' src={img} />
	        	<div className='flex-title'>
		            <h3>{this.props.name}</h3>
		            <h3>${price}</h3>
	            </div>
	        </div>
	    );
	}
}

export default Ad;