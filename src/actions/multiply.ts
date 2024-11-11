import { MULTIPLY } from "../types/multiply";

interface IMultiplyAction {
    type: string;
    payload?: any;
 }

export const multiply = (counter: number = 5): IMultiplyAction => ({
    type: MULTIPLY,
    payload: counter,
})