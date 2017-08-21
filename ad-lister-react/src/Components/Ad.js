import React from 'react';
import DefaultAd from './../img/default-ad.jpeg';

const Ad = (props) =>{
	let img = '';
	let price = '';
	if (props.img.search('https://cdn.filestackcontent.com/') === -1) {
		img = DefaultAd;
	} else {
		img = props.img;
	}
	if (!props.price){
		price = '$2.50';
	} else {
		price = props.price;
	}
    return (
        <div
        onClick={
		    (e) => {
		        console.log(e.target.img);
		    }
		}
        className='ad col-md-4'>
        	<div className='flex-title'>
	            <h3>{props.name}</h3>
	            <h3>{price}</h3>
            </div>
            <img 
            onClick={
			    (e) => {
			        console.log(e.target);
			    }
			}
            alt='ad' className='img-responsive ad-image' src={img} />
            <p>{props.desc}</p>
        </div>
    );
}

export default Ad;