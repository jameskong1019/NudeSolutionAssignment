import { combineReducers } from "redux";
import { item } from "./item"
import { category } from "./category"


export const reducers = combineReducers({
    item, category
})
