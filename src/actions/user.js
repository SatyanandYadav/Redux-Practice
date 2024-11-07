import axios from "axios"
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, NEXT_PAGE, SEARCH_USER } from "../types/user"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const nextPage = (number) => {
    return {
        type: NEXT_PAGE, 
        payload: number,
    }
}

export const searchUser = (search) => {
    return {
        type: SEARCH_USER, 
        payload: search,
    }
}

export const fetchUsers = (page = 0, search = '', limit = 0) => {
    return (dispatch) => {
        const endPoint = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`;
        dispatch(fetchUserRequest());
        axios.get(endPoint)
        .then((res) => {
            // console.log(res)
            const filterData = res.data.filter((data) => data.name.includes(search));
            dispatch(fetchUserSuccess(filterData));
        })
        .catch((err) => {
            // console.log(err);
            dispatch(fetchUserFailure(err));
        })
    }
}