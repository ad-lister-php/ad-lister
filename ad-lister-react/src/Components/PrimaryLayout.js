import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
// import Login from './Login';
// import Register from './Register';
import ProfilePage from './ProfilePage';
import LogRegPage from './LogRegPage';
import NotFound from './NotFound';
import axios from 'axios';



class PrimaryLayout extends Component {
    constructor(props) {
        super(props);


        this.state = {
            loggedIn: false,
            username: ''
        }
        console.log(this.state.loggedIn)
        this.setLoggedIn = this.setLoggedIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    setLoggedIn(username){
        this.setState({
            loggedIn: true,
            username: username
        })
        console.log(this.state)
    }
    logOut(){
        axios.get('/api/logout').then(() => {
            this.setState({
                loggedIn: false,
                username: ''
            });
        })
    }

    render() {
        return (
            <div>
                <Header 
                isLoggedIn={this.state} 
                logOut={this.logOut}/>
                <main className='main'>
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/profile' component={() => (<ProfilePage username={this.state.username} />)} />
                    <Route path='/users' component={() => (<LogRegPage username={this.state.username} setLoggedIn={this.setLoggedIn}/>)} />
                    <Route component={NotFound}/>
                </Switch>
                </main>
            </div>
        )
    }
}
// function setLoggedIn(username) {
//     return {
//         type: SET_LOGGED_IN,
//         username
//     }    
// }
export default PrimaryLayout;