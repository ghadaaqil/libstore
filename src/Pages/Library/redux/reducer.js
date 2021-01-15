import {SAVING_BOOKS, NAME, ADD_TO_SOPPING_BAG} from "./constants";


const initialLibraryState = {
    books: [{
        over: "",
        isbn: "",
        price: null,
        synopsis: "",
        title: ""
}],
    shoppingBag:[],
}

const libraryReducer = (state = initialLibraryState, action) => {
    switch (action.type) {
        case SAVING_BOOKS:
            return {...state, books:[ ...action.payload]};
        case ADD_TO_SOPPING_BAG:
            return {...state,shoppingBag:[...state.shoppingBag,action.isbn]}
        default:
            return {...state}
    }
};
const reducerWrapper = {
    [NAME]: libraryReducer
};
export {initialLibraryState, libraryReducer};

export default reducerWrapper;
