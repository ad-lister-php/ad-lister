import React, {Component} from 'react';
import Ad from './Ad';
import axios from 'axios';


class AdContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
        // const adsArr = this.state.data;
        
    }
    componentWillMount(){
        if (this.props.profile === 'loggedIn') {
            axios.get('/api/profile').then((results) => {
                // console.log(results);
                this.setState({
                    data: results.data
                }) 
            });
        } else {
            if (this.props.searchQuery === 'default'){
                axios.get('/api/all-ads').then((results) => {
                    // console.log(results)
                    this.setState({
                        data: results.data
                    })
                })   
            } else {
                this.setState({
                    data: this.props.searchQuery.data
                })
            }
        }
        
    }
    render(){

        let sectionTitle = '';
        
        const Ads = this.state.data.map((ad) => {  
        
            
            return (
                <Ad
                key={ad.id}
                sql={ad.id}
                
                name={ad.title}
                price={ad.price}
                img={ad.image}
                seller={ad.seller}
                desc={ad.description}
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
