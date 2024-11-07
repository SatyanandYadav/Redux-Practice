import { MULTIPLY } from "../types/multiply"

const initialState = { 
    number: 5
}

export const multiplyReducer = (state = initialState, action) => {
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