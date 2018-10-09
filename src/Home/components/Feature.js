import React, { Component } from 'react';

class Feature extends Component {
    render() {
        return(

            <section className="section-features">
                <div className="row">

                    <h2 className="heading-secondary u-text-center"> What We Do? </h2>

                    <div className="col-1-of-3">
                        <div className="feature-box u-text-center">
                            <h3 className="heading-tertiary">Adopsi</h3>
                            <i className="feature-box__icon"></i>
                            <p className="feature-box__text"></p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box u-text-center">

                            <h3 className="heading-tertiary">Perawatan</h3>
                            <i className="feature-box__icon"></i>
                            <p className="feature-box__text"></p>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="feature-box u-text-center">
                            <h3 className="heading-tertiary">Kesehatan</h3>
                            <i className="feature-box__icon"></i>
                            <p className="feature-box__text"></p>
                        </div>  
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature;
