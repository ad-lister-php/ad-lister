import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Login from './Login';
import Register from './Register';
import ProfilePage from './ProfilePage';
import LogRegPage from './LogRegPage';
import NotFound from './NotFound';



const PrimaryLayout = () => {
    return (
        <div>
            <Header />
            <main className='main'>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/profile' component={ProfilePage} />
                <Route path='/users' component={LogRegPage} />
                <Route component={NotFound}/>
            </Switch>
            </main>
        </div>
    )
}
export default PrimaryLayout;