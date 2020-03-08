import { ACTION_TYPES } from "../actions/category";
const initialState = {
    list: []
}


export const item = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list:[...action.payload]
            }


        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: state.list.map((category) => {
                    if(category.id === action.payload.categoryId) { 
                        category.items = [...category.items, action.payload]; 
                        return category;
                    }  
                    else 
                    { 
                        return category;
                    }
                })
            }

        case ACTION_TYPES.DELETE:
            return {
                ...state,
                list: state.list.filter(x => x.id !== action.payload)
            }
        
    
        default:
            return state;
    }
}