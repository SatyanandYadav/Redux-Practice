import { DECREMENT, INCREMENT } from "../types"

interface ICounterAction {
   type: string;
   payload?: any;
}

export const increment = (): ICounterAction => {
    return  {
        type: INCREMENT
    }
}

export const decrement = (): ICounterAction => {
    return  {
        type: DECREMENT
    }
}