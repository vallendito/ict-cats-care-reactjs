import React from 'react';

const ItemList = (props) => {
    
    const URL_IMG = 'http://cats-care.dx.am/assets/upload/';

    const list = ({allItems}) => {
        return allItems.map((item) => {

            return (
                <div className="col-1-of-4" key={item.id_hewan}>
                    <div className="item-box" >
                        <img src={`${URL_IMG}${item.gambar}`} alt="Cats" className="item-box__img"/>
                        <h3 className="heading-tertiary">{item.nama_hewan}</h3>
                        <p className="item-box__text">Eiusmod dolore ea officia veniam labore.</p>
                        <a href="/" className="btn-small btn--orange">Details</a>
                    </div>
                </div>
            );
        });
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
