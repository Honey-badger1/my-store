import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Basket from '../basket';
import {GoodsPage,CartPage, About, Logg} from '../pages';


import './app.css';
import { Route, Switch } from 'react-router-dom';



class App extends Component{
  
   render(){

    return(
        
        <div className="">
        <AppHeader/>
        <div className='d-flex search'>
        <SearchPanel/> 
        <Basket/>
        </div>
        <Switch>
        <Route path='/' exact component={About}/>
        <Route path='/logg' exact component={Logg}/>
        <Route path='/cart'  component={CartPage}/>
        <Route  exact component={GoodsPage}/>
        <Route path='/goods' exact component={GoodsPage}/>
    
        </Switch>
        </div>
    )
   }


   
   }



export default App;