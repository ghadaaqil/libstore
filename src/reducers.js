import {combineReducers} from "redux";
import assign from 'lodash/assign';
import authenticationReducer from "./Pages/Authentication/redux/reducer";
import libraryReducer from "./Pages/Library/redux/reducer";



const allReducers = assign(authenticationReducer,libraryReducer);
const reducers = combineReducers(allReducers);


export default reducers;
