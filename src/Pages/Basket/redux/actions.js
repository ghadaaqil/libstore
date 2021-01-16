import {SHOW_BASKET,SAVING_PROMO,ADD_TO_SHOPPING_BAG, REMOVE_FROM_SHOPPING_BAG} from "./constants";

export  const showBasket=(visible)=>({
    type:SHOW_BASKET,
    visible
})
export  const savePromo=(promo)=> {
   return ({
        type:SAVING_PROMO,
            promo
    })
}
export const addToBasket=(isbn)=>({
    type:ADD_TO_SHOPPING_BAG,
    isbn
});
export const removeFromBasket=(isbn)=>({
    type:REMOVE_FROM_SHOPPING_BAG,
    isbn
})
