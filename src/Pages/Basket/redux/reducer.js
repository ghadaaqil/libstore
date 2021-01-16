import {SHOW_BASKET, NAME, SAVING_PROMO,ADD_TO_SHOPPING_BAG, REMOVE_FROM_SHOPPING_BAG} from "./constants";
import {compact, fill, findIndex} from "lodash/array";


const initialBasketState = {
  visible:false,
    shoppingBag:[],
}

const basketReducer = (state = initialBasketState, action) => {
    switch (action.type) {
        case SHOW_BASKET:
            return {...state,visible:action.visible};
        case SAVING_PROMO:
            return {...state,promo:action.promo}
        case ADD_TO_SHOPPING_BAG:
            return {...state,shoppingBag:[...state.shoppingBag,action.isbn]}
        case REMOVE_FROM_SHOPPING_BAG:
            let newShoppinBag=[...state.shoppingBag];
            const index = findIndex(newShoppinBag,(x)=>x===action.isbn);
            newShoppinBag=compact(fill(newShoppinBag,"",index,index+1));
            return {...state,shoppingBag:[...newShoppinBag]}
        default:
            return {...state}
    }
};
const reducerWrapper = {
    [NAME]: basketReducer
};
export {initialBasketState, basketReducer};

export default reducerWrapper;
