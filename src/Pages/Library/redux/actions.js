import {SAVING_BOOKS,ADD_TO_SOPPING_BAG} from "./constants";

export const saveBooks=(payload)=>({
    type:SAVING_BOOKS,
    payload
})

export const addToBasket=(isbn)=>({
    type:ADD_TO_SOPPING_BAG,
    isbn
})
