import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';

import * as act from './fruits.actions';

export interface Fruit {
  id: number;
}

export interface FruitState extends EntityState<Fruit> {
  loading: Boolean;
}

export const adapter = createEntityAdapter<Fruit>({});

export function reducer(state: FruitState, action: Action) {
  return fruitReducer(state, action);
}

export const initialState: FruitState = {
  ...adapter.getInitialState(),
  loading: false,
};

export const fruitReducer = createReducer(
  initialState,
  on(act.fetchFruitsRequest, (state) => ({
    ...state,
    loading: true,
  }))
);
