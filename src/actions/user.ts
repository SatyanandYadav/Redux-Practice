import axios from "axios"
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, NEXT_PAGE, SEARCH_USER } from "../types/user"

interface IUserAction {
    type: string;
    payload?: any;
 }

export const fetchUserRequest = (): IUserAction => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess = (users: any): IUserAction => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error: string): IUserAction => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export const nextPage = (number: number): IUserAction => {
    return {
        type: NEXT_PAGE, 
        payload: number,
    }
}

export const searchUser = (search: string) => {
    return {
        type: SEARCH_USER, 
        payload: search,
    }
}

export const fetchUsers = (page: number = 0, search: string = '', limit: number = 0) => {
    return (dispatch) => {
        const endPoint: string = `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`;
        dispatch(fetchUserRequest());
        axios.get(endPoint)
        .then((response) => {
            const usersData = response.data;
            const userFilteredData = usersData.filter((userData: any) => (userData.name.toLowercase()).includes(search.toLocaleLowerCase()));
            dispatch(fetchUserSuccess(userFilteredData));
        })
        .catch((err) => {
            dispatch(fetchUserFailure(err));
        })
    }
}