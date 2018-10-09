import React, {Component} from 'react';
// import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header className="header-adopt">
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="header-adopt__logo">
                            Cats Care
                        </div>
                    </div>

                    <div className="col-1-of-2">
                        <div className="header-adopt__navigation">
                            <ul className="header-adopt__list">

                                <li className="header-adopt__item">
                                    <a href="/" className="header-adopt__link">Home</a>
                                </li>
                                
                                <li className="header-adopt__item">
                                    <a href="/adopt" className="header-adopt__link">Adopsi</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}




export default Header;