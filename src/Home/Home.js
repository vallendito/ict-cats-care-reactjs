import React, { Component } from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import Footer from './components/Footer';

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Feature />
                <Footer />
            </div>
        );
    }
}

export default Home;