import api from "./api"

export const ACTION_TYPES = {
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',
    FETCH_ALL_CATEGORIES: 'FETCH_ALL_CATEGORIES'

}

export const fetchAll = () => dispatch => {
    api.category().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const fetchAllCategories = () => dispatch => {
    api.category().fetchAllCategories()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_CATEGORIES,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}