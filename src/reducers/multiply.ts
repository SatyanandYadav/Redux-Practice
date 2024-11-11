import { IMultiAction, IStoreMultiState } from "../interface"
import { MULTIPLY } from "../types/multiply"

const initialState: IStoreMultiState = { 
    number: 5
}

export const multiplyReducer = (state: IStoreMultiState = initialState, action: IMultiAction) => {
    switch(action.type) {
        case MULTIPLY: {
            return { 
                ...state, number: state.number * action.payload,
            }
        }

        default:
            return state
    }
}