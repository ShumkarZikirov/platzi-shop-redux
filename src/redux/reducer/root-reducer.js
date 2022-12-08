import {combineReducers} from "redux";
import {GlobalReducer} from "./global-reducer";
import {UserReducer} from "./user-reducer";

export const RootReducer = combineReducers({
    GlobalReducer,
    UserReducer
})