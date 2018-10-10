import React, { Component } from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Service from './components/Service';

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Feature />
                <Service />
                <Footer />
            </div>
        );
    }
}

export default Home;