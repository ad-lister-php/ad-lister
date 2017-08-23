import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
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
            search: 'default',
            loggedIn: false,
            username: ''
        }
        // console.log(this.state.loggedIn)
        this.search = this.search.bind(this);
        this.setLoggedIn = this.setLoggedIn.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    search(search){
        this.props.history.push('/');
        axios.get('/api/search', {
            params: {
                value: search
            }
        }).then((results)=>{
                this.setState({
                    search: results
                })
        })
    }

    setLoggedIn(username){
        this.setState({
            loggedIn: true,
            username: username
        })
    }
    logOut(){
        axios.get('/api/logout').then((results) => {

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
                search={this.search}
                setLoggedIn={this.setLoggedIn}
                isLoggedIn={this.state}
                logOut={this.logOut}/>
                <main className='main'>
                <Switch>
                    <Route path='/' exact component={() => (<Main searchQuery={this.state.search} />)} />
                    <Route path='/profile' component={() => (<ProfilePage username={this.state.username} />)} />
                    <Route path='/users' component={() => (<LogRegPage username={this.state.username} setLoggedIn={this.setLoggedIn}/>)} />
                    <Route component={NotFound}/>
                </Switch>
                </main>
            </div>
        )
    }
}

export default withRouter(PrimaryLayout);
