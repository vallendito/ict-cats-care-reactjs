import React, { Component } from 'react';
import Header from './components/Header';
import itemList from './components/ItemList';
import ItemList from './components/ItemList';

const URL_ADOPT = "https://cors-anywhere.herokuapp.com/http://cats-care.dx.am/api_cats_care";


class Adopt extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            adopt: ''
        }
    }

    componentDidMount() {
        fetch(URL_ADOPT, {
            method: 'GET'
        }).then(res => res.json())
        .then(json => {
            console.log(json);
            this.setState({
                adopt:json
            });
        });
    }



    render() {
        return(
            <div>
                <Header />
                <ItemList />
            </div>
        );
    }
}

export default Adopt;
