import { createAction, props } from '@ngrx/store';
import { Fruit } from './fruits.reducers';

export const fetchFruitsRequest = createAction('[Fruit] Fetch fruits request');
export const fetchFruitsRequestDone = createAction(
  '[Fruit] Fetch fruits request done',
  props<{
    fruits: Fruit[];
  }>()
);
export const fetchFruitsRequestError = createAction(
  '[Fruit] Fetch fruits request error',
  props<{
    error: string;
  }>()
);
