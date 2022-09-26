import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { FruitSchema } from '@test/data-access-fruits';

import * as act from './fruits.actions';

export interface FruitState extends EntityState<FruitSchema> {
  loading: Boolean;
}

export const adapter = createEntityAdapter<FruitSchema>({});

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
  })),
  on(act.fetchFruitsRequestDone, (state, action) => ({
    ...adapter.setAll(action.fruits, state),
    loading: false,
  }))
);

const { selectAll } = adapter.getSelectors();

export const selectFruitsFeatureState =
  createFeatureSelector<FruitState>('fruits');

export const selectAllFruits = createSelector(
  selectFruitsFeatureState,
  selectAll
);
