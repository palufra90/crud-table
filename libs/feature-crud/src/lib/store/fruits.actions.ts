import { createAction, props } from '@ngrx/store';
import { FruitSchema } from '@test/data-access-fruits';

export const fetchFruitsRequest = createAction('[Fruit] Fetch fruits request');
export const fetchFruitsRequestDone = createAction(
  '[Fruit] Fetch fruits request done',
  props<{
    fruits: FruitSchema[];
  }>()
);
export const fetchFruitsRequestError = createAction(
  '[Fruit] Fetch fruits request error',
  props<{
    error: string;
  }>()
);
