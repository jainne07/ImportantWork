import { Action } from '@ngrx/store';
export const INCRE = '[counter] increment';
export const DECRE = '[counter] decrement';
export class increment implements Action {
  readonly type = INCRE;
  constructor(public value: number) {}
}
export class decrement implements Action {
  readonly type = DECRE;
  constructor(public value: number) {}
}
export type counterActions=increment | decrement;
