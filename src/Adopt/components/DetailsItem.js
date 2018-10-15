import React from 'react';

const DetailsItem = (props) => {

    const URL_IMG = 'http://catscare.behato.org/assets/upload/';

    const Detail = ({allDetails}) => {
        if(allDetails) {
            return allDetails.map((item) => {
                return (

                    <div className="row" key={item.id_hewan}>
                        <div className="col-1-of-2">
                            <div className="detail-box">
                                <img src={`${URL_IMG}${item.gambar}`} alt="Detail img" className="detail-box__img"/>
                            </div>
                        </div>

                        <div  className="col-1-of-2">
                            
                            <div className="detail-box">                 
                                <h3 className="heading-tertiary">Detail Kucing</h3>
                                
                                <p className="detail-box__text"><b>Nama:</b> {item.nama_hewan}</p>
                                <p className="detail-box__text"><b>Jenis Kelamin:</b> {item.gender}</p>
                                <p className="detail-box__text"><b>Umur:</b> {item.umur_hewan}</p>
                                <p className="detail-box__text"><b>Details:</b> {item.keterangan}</p>
                                <p className="detail-box__text"><b>Alamat:</b> {item.alamat}</p>
<p className="detail-box__text"><b>Harga:</b> {item.harga}</p>

                                <h3 className="heading-tertiary">Kontak</h3>
                                

                                <div className="detail-box__icon">
                                    <img src="/assets/img/icon/whatsapp.png" alt="Whatsapp icon" className="detail-box__icon--1"/> <span className="detail-box__icon--wa">{item.kontak}</span>

                                    <img src="/assets/img/icon/gmail.png" alt="Whatsapp icon" className="detail-box__icon--2"/> <span className="detail-box__icon--gmail">{item.email}</span>
                                </div>

                            </div>

                        </div>
                    </div>

                    
                );
            });
        }

    }
    

    return(
        <div>{Detail(props)}</div>

    )
}

export default DetailsItem;
