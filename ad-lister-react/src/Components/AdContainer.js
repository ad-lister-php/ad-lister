import React, {Component} from 'react';
import Ad from './Ad';

const adsArr = [
    {
        name: 'guitar',
        img: 'PLACEHOLDER-img',
        desc: 'A Great guitar, just need to sell for money'
    },
    {
        name: 'piano',
        img: 'PLACEHOLDER-img',
        desc: 'How did this grand piano get in my apartment?'
    },
    {
        name: 'best-keyboard',
        img: 'PLACEHOLDER-img',
        desc: 'How did this grand piano get in my apartment?'
    },
    {
        name: 'not-keyboard',
        img: 'PLACEHOLDER-img',
        desc: 'How did this grand piano get in my apartment?'
    }
];

const AdContainer = (props) => {

    let sectionTitle = '';

    const Ads = adsArr.map((ad) => {
        console.log(ad)
        return (
            <Ad
            name={ad.name}
            img={ad.img}
            desc={ad.desc}
            />
        )
    })
    if (!props.username) {
        sectionTitle = 'Public'
    } else {
        sectionTitle = props.username;
    }
    return (
        <div className='ad-container container-fluid'>
            <h1 className='ad-section-title'>{sectionTitle} Listings</h1>
            <div>{Ads}</div>
        </div>

    )
}

export default AdContainer;