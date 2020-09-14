import {
    addedToCart
} from "../actions";

const initialState = {
    menu: [],
    loading: true,
    items: [],
    totalPrice: 0,
    filteredItems: [],
    category: "",
    title: "",
    logg: false,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'MENU_LOADED':

            return {
                ...state,
                menu: action.payload,
                    loading: false,
                    filteredItems: action.payload,
                    logg: false



            };
        case 'MENU_REQUSTED':
            return {
                ...state,
                menu: state.menu,
                    loading: true,
                    logg: false
            };
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0) {
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    num: ++itemInState.num
                }
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    totalPrice: state.totalPrice + newItem.price
                }
            }

            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                url: item.url,
                id: item.id,
                price: item.price,
                num: 1
            };
            return {
                ...state,
                items: [...state.items,
                        newItem
                    ],
                    totalPrice: state.totalPrice + newItem.price
            };
        case 'ITEM_DELETE_FROM_CART':
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['num'];
            return {
                ...state,
                items: [...state.items.slice(0, itemIndex),
                        ...state.items.slice(itemIndex + 1)
                    ],
                    totalPrice: state.totalPrice - price
            };
        case 'FIND_CATEGORY':
            const category = action.payload;




            return {

                ...state,
                filteredItems: state.menu.filter(item => {
                    if (category === "") {
                        return item
                    } else {
                        return item.category === category
                    }
                })
            };
        case 'FIND_ITEM':
            const title = action.payload;




            return {

                ...state,
                filteredItems: state.menu.filter(item => {
                    if (title === "") {
                        return item
                    } else {
                        return item.title.indexOf(title) > -1
                    }
                })
            };
        case 'FIND_DISCOUNT':





            return {

                ...state,
                filteredItems: state.menu.filter(item => item.discount)
            };
        case 'CLEAR_ORDER':


            return {

                ...state,
                items:[],
                totalPrice: 0
            };





        default:
            return state;
    }
}

export default reducer;