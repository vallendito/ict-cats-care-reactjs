import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return(
            <footer className="footer-home">
                <div className="row">
                    <div className="footer-home__logo-box u-text-center ">
                        Cats Care
                    </div>
                    <div className="col-1-of-2">
                        <div className="footer-home__navigation">
                            <ul className="footer-home__list">
                                <li className="footer-home__item"><a href="/" className="footer-home__link">Company</a></li>
                                <li className="footer-home__item"><a href="/" className="footer-home__link">Contact Us</a></li>
                                <li className="footer-home__item"><a href="/" className="footer-home__link">Carrers</a></li>
                                <li className="footer-home__item"><a href="/" className="footer-home__link">Privacy Policy</a></li>
                                <li className="footer-home__item"><a href="/" className="footer-home__link">Term</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="footer-home__copyright">
                            Copyright @2018 ICT CDC YUMNA, Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sed praesentium illo! Reiciendis inventore incidunt culpa placeat et, similique praesentium. Maxime id ipsam natus molestiae, ullam doloribus veniam deleniti quod.
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
