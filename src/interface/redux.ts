export interface IStoreState {
   count: IStoreCounterState;
   multi: IStoreMultiState;
   user: IStoreUserState;
}

export interface IStoreCounterState {
    counter: number
 }

 export interface ICounterAction {
    type: string;
    payload: any;
 }

 export interface IStoreMultiState {
    number: number 
 }

 export interface IMultiAction {
    type: string;
    payload: any;
 }

 export interface IStoreUserState {
    loading: boolean;
    users: any[];
    error: string;
    pagination: number;
    pageLimit: number;
    pageNumber: number;
    search: string;
 }


 export interface IUserAction {
    type: string;
    payload: any;
 }

 export interface IDispatchArgs extends IUserAction, ICounterAction, IMultiAction {}

 export interface I

 export type IDispatch  = (args: IDispatchArgs) => 