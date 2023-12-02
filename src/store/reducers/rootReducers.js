
import { combineReducers } from "redux"
import authReducer from "./authReducer/authReducer"

const allReduer = {
    auth: authReducer
}

const rootReducer = combineReducers(allReduer)

export default rootReducer