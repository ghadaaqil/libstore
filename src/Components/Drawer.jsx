import React from 'react';
import Drawer from "antd/lib/drawer";
import 'antd/lib/drawer/style/css';
import {useDispatch, useSelector} from "react-redux";
import countBy from 'lodash/countBy';
import {NAME as BASKETNAME} from "../Pages/Basket/redux/constants";
import {NAME as LIBNAME} from "../Pages/Library/redux/constants";
import {showBasket} from "../Pages/Basket/redux/actions";
import BookCover from "./BookCover";
import {intersectionBy} from "lodash/array";
import {calculateInitialPrice, calculatePromotionalPrice} from "../helpers";

const CustomDrawer = (props) => {
    const visible = useSelector(state => state[BASKETNAME].visible)
    const offers = useSelector(state => state[BASKETNAME].promo?.offers)
    const allBooks = useSelector(state => state[LIBNAME].books)
    const shoppingBag = useSelector(state => state[BASKETNAME].shoppingBag)
    const idsIteration = countBy(shoppingBag, x => x)
    const booksToListInBag = intersectionBy(allBooks,
        shoppingBag.map((elmt) => ({isbn: elmt})),
        'isbn');

    const initialPrice=calculateInitialPrice(booksToListInBag,idsIteration);
    const finalPrice= offers?calculatePromotionalPrice(offers,initialPrice):0;
    const renderChoosenBooks = () => booksToListInBag.map(elmt =>
                                                                    <BookCover key={elmt.isbn} price={elmt.price}
                                                                             cover={elmt.cover}
                                                                             qte={idsIteration[elmt.isbn]}/>)
    const dispatch = useDispatch();

    return (
        <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={() => dispatch(showBasket(!visible))}
            visible={visible}
        >
            <h1>TOTAL:{finalPrice}</h1>
            {renderChoosenBooks()}
        </Drawer>)
}

export default CustomDrawer
