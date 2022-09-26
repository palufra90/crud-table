import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FruitDatabaseService, FruitSchema } from '@test/data-access-fruits';
import { SortItemsUtilService } from '@test/shared-utils';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as act from './fruits.actions';

@Injectable()
export class FruitsEffectsService {
  constructor(
    private act$: Actions,
    private sortItemsService: SortItemsUtilService,
    private fruitService: FruitDatabaseService
  ) {}

  fetchFruits$ = createEffect(() =>
    this.act$.pipe(
      ofType(act.fetchFruitsRequest),
      concatMap(() => {
        return this.fruitService.apiFruitAllGet().pipe(
          map((response) => {
            const res = response.filter((fruit) => !!fruit.genus);
            return act.fetchFruitsRequestDone({
              fruits: res as FruitSchema[],
            });
          }),
          catchError((err) => {
            return of(act.fetchFruitsRequestError({ error: err }));
          })
        );
      })
    )
  );

  sortFruits$ = createEffect(() =>
    this.act$.pipe(
      ofType(act.sortFruitRequest),
      map((action) => {
        const sortedFruits = this.sortItemsService.sortItems(
          JSON.parse(JSON.stringify(action.fruits || [])),
          action.active as keyof FruitSchema,
          action.direction
        );
        return act.fetchFruitsRequestDone({ fruits: sortedFruits });
      })
    )
  );
}
