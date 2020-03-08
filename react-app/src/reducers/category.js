import { ACTION_TYPES } from "../actions/category";
const initialState = {
    list: []
}


export const category = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_CATEGORIES:
            return {
                ...state,
                list:[...action.payload]
            }

        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                items:[...action.payload]
            }
    
        default:
            return state;
    }
}