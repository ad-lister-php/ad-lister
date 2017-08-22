import React from 'react';
import DefaultAd from './../img/default-ad.jpeg';
import $ from 'jquery'

const Ad = (props) =>{
	let img = '';
	let price = '';

	if (!props.img) {
		img = DefaultAd;
	} else {
		img = 'https://cdn.filestackcontent.com/' + props.img;
	}

	if (!props.price){
		price = '2.50';
	} else {
		price = props.price;
	}
    return (
        <div
        id={props.id}
        className='ad col-md-4'>
            <div className='flex-footer'>
	            <p>{props.desc}</p>
	            <span
	            onClick={
	            	(e) => {
	            		e.target.id
	            	}
	            }
	            id='ad-expand' className='v-align glyphicon glyphicon-resize-full' />
            </div>
            <img 
            alt='ad' className='img-responsive ad-image' src={img} />
        	<div className='flex-title'>
	            <h3>{props.name}</h3>
	            <h3>${price}</h3>
            </div>
        </div>
    );
}

export default Ad;