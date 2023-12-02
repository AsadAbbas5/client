import axios from "axios"

export const authActionTypes = {
    SIGN_IN: "signin",
    PRODILE_LOADED: "profileLoaded"
}




export const loadProfile = () => {
    return async (dispatch, getState) => {
        const token = localStorage.getItem("token")
        if (token) {
            axios.get("/api/user/profile").then(
                
                res => {
                    console.log(res.data)
                    dispatch({type:authActionTypes.PRODILE_LOADED,user:res.data.user})
                }
            ).catch(
                error => console.log(error)
            )

        } else {
            

        }
    }
}