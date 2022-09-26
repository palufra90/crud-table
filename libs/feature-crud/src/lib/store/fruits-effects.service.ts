import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FruitDatabaseService, FruitSchema } from '@test/data-access-fruits';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as act from './fruits.actions';

@Injectable()
export class FruitsEffectsService {
  constructor(
    private act$: Actions,
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
}
