import React from 'react';
import { NavLink } from 'react-router-dom';


const ItemList = (props) => {
    
    const URL_IMG = 'http://cats-care.dx.am/assets/upload/';

    const list = ({allItems}) => {
        if(allItems) {
            return allItems.map((item) => {
                return (
                    <div className="col-1-of-4" key={item.id_hewan}>
                        <div className="item-box" >
        
                            <img src={`${URL_IMG}${item.gambar}`} alt="Cats" className="item-box__img"/>
                            <h3 className="heading-tertiary">{item.nama_hewan}</h3>
                            <p className="item-box__text">{item.keterangan} {item.umur_hewan}</p>
                            <NavLink to={`/detail/${item.id_hewan}`} className="btn-small btn--orange">Detail</NavLink>
                        </div>
                    </div>
                );
            });
        }
    }
    

    return(
        <section className="section-item">
            <div className="row">
                
                    {list(props)}
                </div>
        </section>
    )
}

export default ItemList;
