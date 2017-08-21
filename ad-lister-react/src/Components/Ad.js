import React from 'react';
import DefaultAd from './../img/default-ad.jpeg';

const Ad = (props) =>{
	let img = '';
	if (props.img.search('https://cdn.filestackcontent.com/') == -1) {
		img = DefaultAd;
	} else {
		img = props.img;
	}
    return (
        <div className='ad col-md-4'>
            <h3>{props.name}</h3>
            <img alt='ad-image' className='img-responsive' src={img} />
            <div>{props.img}</div>
            <p>{props.desc}</p>
        </div>
    );
}

export default Ad;