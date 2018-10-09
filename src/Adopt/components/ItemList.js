import React from 'react';

const ItemList = () => {
    return(
        <section className="section-item">
            <div className="row">
                <div className="col-1-of-4">
                    <div className="item-box">
                        <img src="assets/img/cat-1.png" alt="Cats" className="item-box__img"/>
                        <h3 className="heading-tertiary">Cipus</h3>
                        <p className="item-box__text">Eiusmod dolore ea officia veniam labore.</p>
                        <a href="/" className="btn-small btn--orange">Details</a>
                    </div>
                </div>
                <div className="col-1-of-4">
                    <div className="">
                        <div className="item-box">
                            <img src="assets/img/cat-1.png" alt="Cats" className="item-box__img"/>
                            <h3 className="heading-tertiary">Cipus</h3>
                            <p className="item-box__text">Eiusmod dolore ea officia veniam labore.</p>
                            <a href="/">Details</a>
                        </div>
                    </div>

                </div>
                <div className="col-1-of-4">
                    <div className="">
                        <div className="item-box">
                            <img src="assets/img/cat-1.png" alt="Cats" className="item-box__img"/>
                            <h3 className="heading-tertiary">Cipus</h3>
                            <p className="item-box__text">Eiusmod dolore ea officia veniam labore.</p>
                            <a href="/">Details</a>
                        </div>
                    </div>

                </div>
                <div className="col-1-of-4">
                    <div className="">
                        <div className="item-box">
                            <img src="assets/img/cat-1.png" alt="Cats" className="item-box__img"/>
                            <h3 className="heading-tertiary">Cipus</h3>
                            <p className="item-box__text">Eiusmod dolore ea officia veniam labore.</p>
                            <a href="/">Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemList;
