import React, { Component } from 'react';
import Header from './components/Header';
import Feature from './components/Feature';

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Feature />
            </div>
        );
    }
}

export default Home;