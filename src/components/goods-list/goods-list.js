import React, {Component} from 'react';
import GoodsListItem from '../goods-list-item';
import {connect} from 'react-redux';
import './good-list.css';
import WithStoreService from '../hoc';
import {menuLoaded,menuRequested,addedToCart} from '../../actions';
import Spinner from '../spinner';


class GoodsList extends Component {

    componentDidMount(){

     this.props.menuRequested();   
     const {StoreService}=this.props;
     StoreService.getMenuItems()
     .then(res=>this.props.menuLoaded(res))
    }

    render() {

        const{goodsItems,loading, addedToCart}=this.props;
        if (loading){
            return <Spinner/>
        }

        return (

           
            <ul className="goodlist"> 
               {
                goodsItems.map(gooditem=>{
                return <GoodsListItem key={gooditem.id} 
                gooditem={gooditem}
                onAddToCart={()=>addedToCart(gooditem.id)}/>

                })
                }
            </ul>
            
           
           
        )
    }
};

const mapStateToProps=(state)=>{
    return{
        goodsItems:state.filteredItems,
        loading:state.loading
    }
}

const mapDispatchToProps={
    menuLoaded,
    menuRequested,
    addedToCart
}

export default WithStoreService()(connect(mapStateToProps,mapDispatchToProps)(GoodsList));
