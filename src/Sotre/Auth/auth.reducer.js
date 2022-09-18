import { 
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT 
     } from "./auth.action.type";

    // initstate

 let token = localStorage.getItem("token") || "";
const initState={
    token:token,
    loading:false,
    error:false,
};


// reducer auth
export const authReducer = (state=initState, {type, payload})=>{
    switch(type){
        case AUTH_LOGIN_LOADING: return{
            ...state,
            loading:true,
            error:false,
        }
        case AUTH_LOGIN_ERROR: return{
            ...state,
            loading:false,
            error:true,
        }
        case AUTH_LOGIN_SUCCESS: 
           localStorage.setItem("token", payload.token);
           return{
            ...state,
            loading:false,
            error:false,
            token: payload.token,
        }

        case AUTH_LOGOUT: 
           localStorage.removeItem("token");
           return{
                ...state,
                loading:false,
                error:false,
                token:""
           }
        

        default: return state;
    }
}