import React from 'react';
import Ad from './Ad';

const adsArr = [
    {
        name: 'guitar',
        price: '$250',
        img: 'https://cdn.filestackcontent.com/CJsRgXEwRwaIbARmKxtx',
        desc: 'A Great guitar, just need to sell for money'
    },
    {
        name: 'piano',
        price: '$900',
        img: 'PLACEHOLDER-img',
        desc: 'How did this grand piano get in my apartment?'
    },
    {
        name: 'best-keyboard',
        price: '$.50',
        img: 'PLACEHOLDER-img',
        desc: 'rubber dome garbage'
    },
    {
        name: 'not-keyboard',
        price: '$5',
        img: 'PLACEHOLDER-img',
        desc: 'Blender'
    }
];

const AdContainer = (props) => {

    let sectionTitle = '';

    const Ads = adsArr.map((ad) => {
        console.log(ad)
        return (
            <Ad
            name={ad.name}
            price={ad.price}
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