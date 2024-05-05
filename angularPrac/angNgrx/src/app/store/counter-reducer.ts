import { createReducer, Action } from '@ngrx/store';
import * as counterActions from './counter.actions';

const initialState = 0;

export function counterReducer(state = initialState,action:  Action) {
  if(action.type===counterActions.INCRE){
    return state + (action as counterActions.increment).value
  }else if(action.type===counterActions.DECRE){
    return state - (action as counterActions.decrement).value
  }
  return state;
}