import { SortDirection } from '@angular/material/sort';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { FruitSchema } from '@test/data-access-fruits';
import { SortItemsUtilService } from '@test/shared-utils';

import * as act from './fruits.actions';

export interface FruitState extends EntityState<FruitSchema> {
  loading: boolean;
  sortActive?: string;
  sortDirection?: SortDirection;
}

export const adapter = createEntityAdapter<FruitSchema>({});

export const sortService = SortItemsUtilService;

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
  on(act.fetchFruitsRequestDone, act.sortFruitRequestDone, (state, action) => ({
    ...adapter.setAll(action.fruits, state),
    loading: false,
  })),
  on(act.sortFruitRequest, (state, action) => ({
    ...state,
    loading: true,
    sortActive: action.active,
    sortDirection: action.direction,
  })),
  on(act.deleteFruitRequest, (state, action) => ({
    ...adapter.removeOne(action.fruit.id as number, state),
    loading: false,
  })),
  on(act.editFruitRequest, (state, action) => ({
    ...adapter.upsertOne(
      {
        ...action.fruit,
        id: action.fruit.id || state.ids.length,
      },
      state
    ),
  }))
);

const { selectAll } = adapter.getSelectors();

export const selectFruitsFeatureState =
  createFeatureSelector<FruitState>('fruits');

export const selectAllFruits = createSelector(
  selectFruitsFeatureState,
  selectAll
);
