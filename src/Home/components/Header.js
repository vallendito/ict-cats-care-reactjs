import React, {Component} from 'react';
// import { Link } from 'react-router-dom';

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
                                    <a href="/" className="header-home__link">Home</a>
                                </li>
                                
                                <li className="header-home__item">
                                    <a href="/adopt" className="header-home__link">Adopt</a>
                                </li>

                                <li className="header-home__item">
                                    <a href="/adopt" className="header-home__link">Contact</a>
                                </li>

                                <li className="header-home__item">
                                    <a href="/" className="header-home__link btn-outline btn-outline--orange">Adopt Now</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="header-content ">
                    <div className="row">
                        <div className="col-1-of-2">
                            <div className="header-content__left">
                                <h1 className="heading-primary">Kamu dapat menolong <br/> kucing terlatar untuk <br/> di adopsi.</h1>
                                <p className="paragraph">Dengan menggunakan fitur Chatbot kamu <br/>
                                akan mendapatkan info mengenai kucing dan <br/> kamu bisa mengadopsi kucing terlantar.
                                </p>

                                <a href="/" className="btn btn--orange">Adopt Now</a>
                            </div>
                        </div>

                        <div className="col-1-of-2">
                            <div className="header-content__right">
                                <img src="assets/img/Illustrasi.png" alt="Cats CAre Illustrator" className="header-content__right--img"/>      
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </header>
        );
    }
}




export default Header;