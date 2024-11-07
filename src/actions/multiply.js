import { MULTIPLY } from "../types/multiply";

export const multiply = (counter = 5) => ({
    type: MULTIPLY,
    payload: counter,
})