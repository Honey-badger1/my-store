import React from 'react';
import './index.css';


const GoodsListItem = ({gooditem, onAddToCart}) => {
    const {title, price, url, category}=gooditem;
    return (
        
            <li className="goodlistli">
                <div className="menu__carts">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt="Witcher 3"></img>
    <div className="menu__category">Category: <span>{category}</span></div>
    <div className="menu__price">Price: <span>{price}$</span></div>
    </div>
                <button onClick={()=>onAddToCart()} className="menu__btn">Add to cart</button>
            </li>
    )
}

export default GoodsListItem;