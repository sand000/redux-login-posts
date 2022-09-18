import { GET_FEEDS_ERROR, GET_FEEDS_LOADING, GET_FEEDS_SUCCESS } from "./feeds.action.type";

const initState={
    loading: false,
    error: false,
    data:[],
};

export const feedReducer = (state=initState, {type, payload})=>{
    switch(type){
        case GET_FEEDS_LOADING : return{
            ...state,
            loading:true,
            error: false,
        } 
        case GET_FEEDS_ERROR : return{
            ...state,
            loading:false,
            error: true,
        } 
        case GET_FEEDS_SUCCESS : return{
            ...state,
            loading:false,
            error: false,
            data: payload,
        } 

        default: return state;
    }
}