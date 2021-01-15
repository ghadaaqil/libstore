import {CREDENTIALS_SAVING} from "./constants";

export const saveCredentials=(payload)=> {
    console.log(">>>payload",payload)
   return ({
        type:CREDENTIALS_SAVING,
            payload
    })
}
