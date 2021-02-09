import {initialPrice, offersMinus, offersPercent, offersSlice} from "./mocks";
import {calculatePromotionalPrice} from "../index";

describe('calculatePromotionalPrice', () => {
    test("it should return price with minus offer",()=>{
        const price=calculatePromotionalPrice(offersMinus,initialPrice)
        expect(price).toBe(75);
    })
    test("it should return price with percentage offer",()=>{
        const price=calculatePromotionalPrice(offersPercent,initialPrice)
        expect(price).toBe(85.5);
    })
    test("it should return price with slice offer",()=>{
        const price=calculatePromotionalPrice(offersSlice,initialPrice)
        expect(price).toBe(70);
    })

});

