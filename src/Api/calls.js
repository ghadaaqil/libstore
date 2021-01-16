import axios from "axios";


const getAllBooksApi=()=>axios.get("https://henri-potier.techx.fr/books");
const getPricePromo=(isbns)=>axios.get(`https://henri-potier.techx.fr/books/${isbns}/commercialOffers`)

export {getAllBooksApi,getPricePromo}
