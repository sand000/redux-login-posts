import { authReducer } from "./Auth/auth.reducer";
import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { feedReducer } from "./Feeds/feeds.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    feeds: feedReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));