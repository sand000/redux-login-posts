const initState={};

export const authReducer = (state=initState, {type, payload})=>{
    switch(type){
        case 1 : return{}
        default: return state;
    }
}