import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header className="header-adopt">
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="header-home__logo-box">
                            <img src="/assets/img/icon/logo.png" alt="logo" className="header-home__logo-box--img"/>
                        </div>
                    </div>

                    <div className="col-1-of-2">
                        <div className="header-home__navigation">
                            <ul className="header-home__list">


                                <li className="header-home__item">
                                    <NavLink exact to="/" className="header-home__link">Home</NavLink>
                                </li>
                                
                                <li className="header-home__item">
                                    <NavLink to="/adopt" className="header-home__link">Adopt</NavLink>
                                </li>

                                <li className="header-home__item">
                                    <NavLink to="/adopt" className="btn-outline btn-outline--orange">Adopt Now</NavLink>
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