import React, {Component} from 'react';

import DefaultAd from './../img/default-ad.jpeg';

import {Route} from 'react-router';
import DeleteButton from './DeleteButton';
import axios from 'axios';

class Ad extends Component{
	constructor(props){
		super(props);

		this.state = {
			deleteStateChanger: 0
		}
		this.delete = this.delete.bind(this);
	}

	delete(props){
		let confirmation = window.confirm('Are you sure you want to delete this ad?');
		if(confirmation){
			axios.get('/api/delete',{
				params: {
					id: this.props.sql
				}
			}).then((results) =>{
				this.forceUpdate();
			})
		}

	}
	render(){
		let img = '';
		let price = '';
		
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
		            <p>{this.props.seller}</p>
	            </div>
	            <img 
	            alt='ad' className='img-responsive ad-image' src={img} />
	        	<div className='flex-title'>
		            <h3>{this.props.name}</h3>
		            <h3>${price}</h3>
	            </div>
		            <p>{this.props.desc}</p>
	        </div>
	    );
	}
}

export default Ad;