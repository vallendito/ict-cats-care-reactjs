import React from 'react';

const DetailsItem = (props) => {

    const Detail = ({allDetails}) => {
        if(allDetails) {
            return allDetails.map((item) => {
                return (

                    <div className="row" key={item.id_hewan}>
                        <div className="col-1-of-2">
                            <div className="detail-box">
                                <img src="/assets/img/cat-1.png" alt="Detail img" className="detail-box__img"/>
                            </div>
                        </div>

                        <div  className="col-1-of-2">
                            
                            <div className="detail-box">                 
                                <h3 className="heading-tertiary">{item.nama_hewan}</h3>
                                <h2
                                className="heading-tertiary">{item.alamat}</h2>
                                <p>{item.gender}</p>
                                <p>{item.umur_hewan}</p>
                                <p>{item.keterangan}</p>
                                <p>{item.kontak}</p>
                                <p>{item.email}</p>
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
