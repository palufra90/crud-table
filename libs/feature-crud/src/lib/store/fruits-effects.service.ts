import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as act from './fruits.actions';
import { HttpClient } from '@angular/common/http';
import { catchError, concatMap, map } from 'rxjs/operators';
import { Fruit } from './fruits.reducers';
import { of } from 'rxjs';

@Injectable()
export class FruitsEffectsService {
  constructor(private act$: Actions, private httpClient: HttpClient) {}

  fetchFruits$ = createEffect(() =>
    this.act$.pipe(
      ofType(act.fetchFruitsRequest),
      concatMap(() => {
        return this.httpClient.get('www.fruityvice.com/api/fruit/all').pipe(
          map((response) => {
            return act.fetchFruitsRequestDone({ fruits: response as Fruit[] });
          }),
          catchError((err) => {
            return of(act.fetchFruitsRequestError({ error: err }));
          })
        );
      })
    )
  );
}
