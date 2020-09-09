import React, {Component} from 'react';
import './app-header.css';
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
import { connect } from 'react-redux';
import {findDiscount} from '../../actions';

class AppHeader extends Component{
 render(){
    return(
        <div className='d-flex app-header'>
          <h1>W3</h1>
            <ul >
               <Link to={'/'} className="link"> <li className='float-left apphli'>About</li></Link>
                <Link to={'/goods'} className="link"><li className='float-left apphli'>Goods</li></Link>
                <li className='float-left apphli' onClick={()=>{this.props.findDiscount()}}>Discounts</li>
                <li className='float-left apphli'>Delivery</li>
                <li className='float-left apphli'>Contact us</li>
            </ul>
            <Button color="primary"  className="login"><Link to={'/logg'} className="link">Log in</Link></Button>
        </div>
    )
 }
}

const mapStateToProps=(state)=>{
    return{
        menu: state.menu,
        filteredItems:state.filteredItems
    
      
        
    }
}

const mapDispatchToProps={
    findDiscount
    
}

export default connect(mapStateToProps,mapDispatchToProps)(AppHeader);
