import { authActionTypes } from "../../action/authActionTypes"


const initState = {
    user: null,
    token: null,
    isloaded: false,
    islogin: false

}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authActionTypes.SIGN_IN:
            console.log("consolong action", action)

            return {
                ...state,
                user: action.data.user,
                token: action.data.token,
                isloaded: true,
                islogin: true
            }
            case authActionTypes.PRODILE_LOADED:
         

                return {
                    ...state,
                    user: action.user,
                    token: localStorage.getItem("token"),
                    isloaded: true,
                    islogin: true
                }
        default:
            return state
    }


}
export default authReducer