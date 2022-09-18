import axios from "axios";
import { 
    AUTH_LOGIN_ERROR,
    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT, 
    } from "./auth.action.type";
    
    // login action
   export const login = (creds) => async(dispatch) => {

      dispatch({
        type: AUTH_LOGIN_LOADING,
       })
        try{
            let response = await axios.post("https://reqres.in/api/login", creds);
            dispatch({
              type: AUTH_LOGIN_SUCCESS,
              payload: response.data,
             })
        } catch(e){
            console.log("Error posting");
            dispatch({
              type: AUTH_LOGIN_ERROR,
            })
          };
      };

// logout action
  export const logout = () =>({type: AUTH_LOGOUT})

  