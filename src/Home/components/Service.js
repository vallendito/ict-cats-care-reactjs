import React, { Component } from 'react';


class Service extends Component {
    render() {
        return(
            <section className="section-service">
                <div className="row">
                <h2 className="heading-secondary u-text-center"> Facebook Chatbot for Cats Care  </h2>
                    <div className="col-1-of-3">
                        <div className="service-box">
                            <h3 className="service-box__title">
                            Komunikasi dengan Cats Care 24/7
                            </h3>
                            <p className="service-box__text">
                            Komunikasi dengan Cats Care tanpa ada batasan waktu, kamu bisa berkonsultasi 24 jam.
                            </p>

                            <h3 className="service-box__title">
                            No Downloads
                            </h3>
                            <p className="service-box__text">
                            Tidak perlu mengunduh aplikasi, langsung coba dengan messenger kamu. 
                            </p>

                            <h3 className="service-box__title">
                            Komunikasi Seperti Teman Sendiri.
                            </h3>
                            <p className="service-box__text">
                            Cats Care akan ngobrol seperti teman kamu mengenai kesehatan, tips & trik perawatan kucing.
                            </p>
                        </div>    
                    </div>
                    <div className="col-1-of-3">
                        <div className="service-box">
                            <img src="assets/img/cats_care_animated.gif" alt="animated" className="service-box__animated"/>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="service-box">
                        <h3 className="service-box__title">
                            Informasi Kesehatan Kucing
                            </h3>
                            <p className="service-box__text">
                            Dapatkan informasi mengenai kesehatan kucing seperti kucing sakit, diare, stress dll.
                            </p>

                            <h3 className="service-box__title">
                            Adopsi Kucing
                            </h3>
                            <p className="service-box__text">
                            Kamu bisa melihat fitur adopsi di website resmi Cats Care www.cats-care.com 
                            </p>

                            <h3 className="service-box__title">
                            Tips & Trik Perawatan Kucing
                            </h3>
                            <p className="service-box__text">
                            Dapatkan informasi mengenai Tips & Trik Perawatan kucing seperti Tips memandikan kucing, tips merawat kucing kecil, tips membuat kucing gimbul, dll.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Service;









