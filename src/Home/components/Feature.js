import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return(

            <section className="section-features">
                <div className="row">

                    <h2 className="heading-secondary u-text-center"> What We Do? </h2>

                    <div className="col-1-of-3">
                        <div className="feature-box u-text-center">
                            <h3 className="heading-tertiary feature-box__title">Adopsi</h3>
                            <img className="feature-box__icon" src="assets/img/icon/icon-adopsi.png" alt="icon features"  />
                            <p className="feature-box__text">
                                Melalui Cats Care kamu bisa mengadopsi kucing dengan mudah.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box u-text-center">

                            <h3 className="heading-tertiary feature-box__title">Perawatan</h3>
                            <img className="feature-box__icon" src="assets/img/icon/icon-perawatan.png" alt="icon features"  />
                            <p className="feature-box__text">
                                Melalui Cats Care kamu bisa konsultasi mengenai Tips & Trik perawatan kucing.
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box u-text-center">
                            <h3 className="heading-tertiary feature-box__title">Kesehatan</h3>
                            <img className="feature-box__icon"  src="assets/img/icon/icon-kesehatan.png" alt="icon features" />
                            <p className="feature-box__text">
                                Melalui Cats Care kamu bisa konsultasi mengenai Kesehatan kucing.
                            </p>
                        </div>  
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature;
