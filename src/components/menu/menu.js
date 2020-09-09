import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';
import './menu.css';
import {findCategory} from '../../actions';



class Menu extends Component{
  

  render(){
    return(
        <ButtonGroup className='menu'>
            
            <Button color="primary"  onClick={()=>this.props.findCategory("")}>All</Button>
            <Button color="primary"  onClick={()=>this.props.findCategory("PC")}>PC</Button>
            <Button color="primary"  onClick={()=>this.props.findCategory("XBOX 360")}>Xbox360</Button>
            <Button color="primary"  onClick={()=>this.props.findCategory("PS")}>PlayStation</Button>
           
        </ButtonGroup>
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
    findCategory
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);