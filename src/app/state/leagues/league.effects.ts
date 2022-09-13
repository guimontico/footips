import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadFixtures,
  loadFixturesSuccess,
  loadFixturesFailure,
} from './league.actions';
import { FixtureService } from '../../services/fixtures/fixture.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class FixturesEffects {
  constructor(
    private actions$: Actions,
    private fixtureService: FixtureService
  ) {}

  // Run this code when a loadFixturess action is dispatched
  loadFixturess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFixtures),
      switchMap(() =>
        // Call the getFixturess method, convert it to an observable
        from(this.fixtureService.getFixtures()).pipe(
          // Take the returned value and return a new success action containing the fixtures
          map((fixtures) => loadFixturesSuccess({ fixtures: fixtures })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadFixturesFailure({ error })))
        )
      )
    )
  );
}