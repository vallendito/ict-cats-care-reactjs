import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header className="header-home">
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="header-home__logo">
                            Cats Care
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

                <div className="header-content ">
                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="header-content__left">
                                <h1 className="heading-primary">Kamu dapat menolong <br/> <span>  kucing terlatar untuk </span> <br/> di adopsi.</h1>
                                <p className="paragraph">Dengan menggunakan fitur Chatbot kamu <br/>
                                akan mendapatkan info mengenai kucing dan <br/> kamu bisa mengadopsi kucing terlantar.
                                </p>

                                <NavLink to="/adopt" className="btn btn--orange btn--animated">Adopt Now</NavLink>
                            </div>
                        </div>

                        <div className="col-1-of-2">
                            <div className="header-content__right">
                                <img src="assets/img/illustrator.png" alt="Cats Care Illustrator" className="header-content__right--img"/>      
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}




export default Header;