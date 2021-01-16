import {SAVING_BOOKS, NAME} from "./constants";



const initialLibraryState = {
    books: [{
        over: "",
        isbn: "",
        price: null,
        synopsis: "",
        title: ""
}]
}

const libraryReducer = (state = initialLibraryState, action) => {
    switch (action.type) {
        case SAVING_BOOKS:
            return {...state, books:[ ...action.payload]};
        default:
            return {...state}
    }
};
const reducerWrapper = {
    [NAME]: libraryReducer
};
export {initialLibraryState, libraryReducer};

export default reducerWrapper;
