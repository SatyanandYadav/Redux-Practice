import { INCREMENT, DECREMENT} from '../types/index'

export const increment = () => {
    return  {
        type: INCREMENT
    }
}

export const decrement = () => {
    return  {
        type: DECREMENT
    }
}