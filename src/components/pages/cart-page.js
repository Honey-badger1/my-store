import React from 'react';
import CartTable from '../cart-list';
import './pages.css';

const CartPage = () => {
    return (
        <ul className="cart"> 
            <CartTable/>
        </ul>
    )
}

export default CartPage;