import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

export const calculateInitialPrice = (books, isbnIterations) => {
    let initialPrice = 0;
    books.forEach(elmt => initialPrice += elmt.price * isbnIterations[elmt.isbn])
    return initialPrice
}

const OfferTypesEnum = {
    PERCENT: "percentage",
    MINUS: "minus",
    SLICE: "slice"
}
export const calculatePromotionalPrice = (offers, initialPrice) => {
    let price = initialPrice;
    let pricePer = initialPrice;
    let priceMin = initialPrice;
    let priceSL = initialPrice;

    offers.map(elmt => {
        switch (elmt.type) {
            case OfferTypesEnum.PERCENT:
                pricePer = initialPrice - (elmt.value * initialPrice / 100);
                break;
            case OfferTypesEnum.MINUS:

                 priceMin = initialPrice - elmt.value;
                break;
            case OfferTypesEnum.SLICE:

                if(initialPrice< elmt.sliceValue) {
                    priceSL = initialPrice;
                }
                 else priceSL = initialPrice - (elmt.value * Math.floor(initialPrice / elmt.sliceValue))
                break;
        }

    })
    return Math.min(priceMin,priceSL,pricePer,price);
}

export const renderWithRedux = (
    component,
    store
) => {
    return render(<Provider store={store}>{component}</Provider>);
};
