import React,{Component} from 'react';
import { connect } from 'react-redux';

import {findItem} from '../../actions';


class SearchPanel extends Component{

 render(){
    return(
        <div className='d-flex'>
        <input type='search'
        placeholder='Search'  onChange={(event) => {
            this.props.findItem(            
              event.target.value
            )}}/>
        <button onClick={(e) => {
            this.props.findItem(            
              e.currentTarget.previousElementSibling.value
            )}}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
</svg></button>
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
    findItem
    
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchPanel);