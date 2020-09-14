import React from 'react';
import {connect} from 'react-redux';
import WithStoreService from '../hoc';

import {deleteFromCart, clearOrder} from '../../actions';



const CartTable = ({items, deleteFromCart, clearOrder, StoreService}) => {
    return (
        <li>
            <div className="cart__title" >Your Order:</div>
            <div className="cart__list">
                {


                 items.map(item=>{
                const {title, price, url,id, num}=item;

                return(
                    <div className="cart__item">
                    <img src={url} alt={title}></img>
                    <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{price}$*{num}</div>
                    <div onClick={()=>deleteFromCart(id)} className="cart__close">&times;</div>
                    </div>
                    
                )
                 })

                }
        
      



            </div>
            <button onClick = {() => {StoreService.setOrder( generateOrder(items)
            ).then(response=>{console.log(response)}
            ).catch(()=>{throw new Error('json error')}
            ).finally(()=>{clearOrder()})}
         }>Set Order</button>
            
        </li>
        
    );
};
const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.num
        }
    })
    return newOrder;
}

const mapStateToProps=({items})=>{
    return{
        items
    }
}

const mapDispatchToProps={
   deleteFromCart,
   clearOrder
}

export default WithStoreService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));