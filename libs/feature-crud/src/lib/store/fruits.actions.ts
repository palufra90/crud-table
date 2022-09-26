import { SortDirection } from '@angular/material/sort';
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

export const sortFruitRequest = createAction(
  '[Fruit] Sort fruits request',
  props<{
    fruits: FruitSchema[];
    active: string;
    direction: SortDirection;
  }>()
);

export const sortFruitRequestDone = createAction(
  '[Fruit] Sort fruits request',
  props<{
    fruits: FruitSchema[];
  }>()
);

export const deleteFruitRequest = createAction(
  '[Fruit] Delete fruit request',
  props<{
    fruit: FruitSchema;
  }>()
);

export const editFruitRequest = createAction(
  '[Fruit] Edit fruit request',
  props<{
    fruit: FruitSchema;
  }>()
);

export const editFruitRequestDone = createAction(
  '[Fruit] Edit fruit request done',
  props<{
    fruit: FruitSchema;
  }>()
);
