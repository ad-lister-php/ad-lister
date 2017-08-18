import React, { Component } from 'react';
// import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom';
import PrimaryLayout from './Components/PrimaryLayout';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <PrimaryLayout />
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
