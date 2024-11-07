import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, NEXT_PAGE, SEARCH_USER } from "../types/user"

const initialState = {
    loading: false,
    users: [],
    error: '',
    pagination: 4,
    pageLimit: 3,
    pageNumber: 1,
    search: '',
}

export const userReducer = (state = initialState, action) => {
   switch(action.type) {
    case FETCH_USER_REQUEST: {
        return {
            ...state,
            loading: true,
        }
    }
    case FETCH_USER_SUCCESS: {
        return {
            ...state,
            loading: false,
            users: action.payload,
            error: '',
        }
    }
    case FETCH_USER_FAILURE: {
        return {
            ...state,
            loading: false,
            users: [],
            error: action.payload,
        }
    }
    case NEXT_PAGE: {
        return {
            ...state,
            pageNumber: action.payload,
        }
    }
    case SEARCH_USER: {
        return {
            ...state,
            search: action.payload,
        }
    }
    default:
        return state
   }
}