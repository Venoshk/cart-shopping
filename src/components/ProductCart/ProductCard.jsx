import React from "react";
import "./ProductCard.css";

import { BsFillCartPlusFill } from 'react-icons/bs';
import formateCurrency from "../../utils/formateCurrency";

function ProductCard({data}){

    const {title,thumbnail, price} = data

    return(
        <section className="product-card">
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
            alt="product" 
            className="card__image"
            />

            <div className="card__infos">
                <h2 className="card__price">
                    {formateCurrency(price, 'BRL')}
                </h2>
                <h2 className="card__title">{title}</h2>
            </div>

            <button type="button" className="button__add-cart">
                <BsFillCartPlusFill/>
            </button>
        </section>
    )
};

export default ProductCard;
