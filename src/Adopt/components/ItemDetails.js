import React, { Component } from 'react';


const REQ_URL = "https://cors-anywhere.herokuapp.com/http://cats-care.dx.am/api_cats_care?id_hewan=";

class ItemDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adopt: ''
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id_hewan);

        fetch(`${REQ_URL}${this.props.match.params.id_hewan}`,{
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
                    <h3>{this.state.adopt.alamat}</h3>
                </div>
            </div>
        );
    }
}

export default ItemDetails;