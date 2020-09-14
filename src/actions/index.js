const menuLoaded=(newMenu)=>{
    return{
        type:"MENU_LOADED",
        payload:newMenu
    };
};

const menuRequested=()=>{
    return{
        type:"MENU_REQUESTED"
        
    };
};

const addedToCart=(id)=>{
    return{
        type:"ITEM_ADD_TO_CART",
        payload:id
        
    };
};

const deleteFromCart=(id)=>{
    return{
        type:"ITEM_DELETE_FROM_CART",
        payload:id
        
    };
};

const findCategory=(category)=>{
    return{
        type:"FIND_CATEGORY",
        payload:category
        
        
    };
};
const findItem=(title)=>{
    return{
        type:"FIND_ITEM",
        payload:title
        
        
    };
};
const findDiscount=()=>{
    return{
        type:"FIND_DISCOUNT"
        
        
        
    };
};
const clearOrder=()=>{
    return{
        type:"CLEAR_ORDER"
        
        
        
    };
};



export {
     menuLoaded,
     menuRequested,
     addedToCart,
     deleteFromCart,
     findCategory,
     findItem,
     findDiscount,
     clearOrder
     
    
};