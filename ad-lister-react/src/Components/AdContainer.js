import React, {Component} from 'react';
import Ad from './Ad';
import SelectedAd from './SelectedAd';
import axios from 'axios';

const adsArr = [
    {
        name: 'guitar',
        price: '250',
        img: 'https://cdn.filestackcontent.com/CJsRgXEwRwaIbARmKxtx',
        desc: 'A Great guitar, just need to sell for money'
    },
    {
        name: 'piano',
        price: '900',
        img: 'PLACEHOLDER-img',
        desc: 'How did this grand piano get in my apartment?'
    },
    {
        name: 'best-keyboard',
        price: '.50',
        img: 'PLACEHOLDER-img',
        desc: 'rubber dome garbage'
    },
    {
        name: 'not-keyboard',
        price: '5',
        img: 'PLACEHOLDER-img',
        desc: 'Blender'
    }
];

class AdContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
        // const adsArr = this.state.data;
        
    }
    componentWillMount(){
        if (this.props.profile == 'loggedIn') {
            axios.get('/api/profile').then((results) => {
                console.log(results);
                this.setState({
                    data: results.data
                }) 
            });
        } else {
            axios.get('/api/all-ads').then((results) => {
                console.log('request done!')
                this.setState({
                    data: results.data
                })
            })   
        }
        
    }
    render(){
        // console.log(this.state.data)
        // console.log('rendered!')
        let sectionTitle = '';
        let i = -1;
        const Ads = this.state.data.map((ad) => {
            i++;
            console.log(ad);
            return (
                <Ad
                key={ad.id}
                sql-id={ad.id}
                id={'ad' + i }
                name={ad.title}
                price={ad.price}
                img={ad.image}
                desc={ad.seller}
                />
            )
        })
        if (!this.props.username) {
            sectionTitle = 'Public'
        } else {
            sectionTitle = this.props.username + "'s";
        }
        return (
            <div className='ad-container container-fluid'>
                <h1 className='ad-section-title'>{sectionTitle} Listings</h1>
                <div>{Ads}</div>
            </div>

        )
    }
}

export default AdContainer;
