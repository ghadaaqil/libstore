import {NAME} from "./constants";

export const getAllBooks=(state)=>state[NAME].books;

export const getBooksInTheBasket=(state)=>state[NAME].shoppingBag;
