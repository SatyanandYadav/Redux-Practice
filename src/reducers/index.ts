import { ICounterAction, IStoreCounterState } from '../interface';
import { INCREMENT, DECREMENT} from '../types/index'


const initialState: IStoreCounterState = {
     counter: 0,
}

const counterReducer = (state: IStoreCounterState = initialState, action: ICounterAction) => {
    switch(action.type) {
        case INCREMENT: {
            return { ...state, counter: state.counter + 1 };
        }
        case DECREMENT: {
            return { ...state, counter: state.counter - 1 };
        }
        default:
            return state;
    }
}

export default counterReducer;