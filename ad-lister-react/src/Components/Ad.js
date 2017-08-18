import React from 'react';

const Ad = (props) =>{
    return (
        <div className='ad col-md-4'>
            <h3>{props.name}</h3>
            <div>{props.img}</div>
        </div>
    );
}

export default Ad;