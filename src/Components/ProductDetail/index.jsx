import React from 'react' 
import { Link, useLocation     } from 'react-router-dom';
import './index.scss'; 

function ProductDetail() {
    const data = useLocation();
    return (
        <div>
            <div className="back__to__list">
                <Link to="/">Back to list</Link>
            </div>
            <div className="card__wrapper">
                <div className="card__wrapper--inner">
                    <div className="card__wrapper--product-imgs">
                        <div className="card__wrapper--img-display">
                            <div className="card__wrapper--img-showcase">
                                <img src={data.state.image.src} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card__wrapper--product-content">
                        <h2 className="card__wrapper--product-title">{data.state.title}</h2>

                        <div className="card__wrapper--product-price">
                            <p className="card__wrapper--new-price">Price: <span>${data.state.variants[0].price}</span></p>
                        </div>

                        <div className="card__wrapper--product-detail">
                            <h2>about this item: </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                            <ul>
                                <li>Product Type: <span>{data.state.product_type}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
