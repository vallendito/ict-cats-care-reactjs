import React, { Component } from 'react';
import Header from './Header';
import DetailsItem from './DetailsItem';


const REQ_URL = `https://cors-anywhere.herokuapp.com/http://catscare.behato.org/api_cats_care`;

const PARAM = `?id_hewan=`;

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adopt: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id_hewan);

        fetch(`${REQ_URL}${PARAM}${this.props.match.params.id_hewan}`,{
            method:'GET'
        }).then(response => response.json())
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
                <div>

                    <Header />

                    <DetailsItem allDetails={this.state.adopt}/>                    
                </div>
            </div>
        );
    }
}

export default Details;