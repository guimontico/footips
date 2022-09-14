import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadFixtures,
  loadFixturesSuccess,
  loadFixturesFailure,
} from './fixture.actions';
import { FixtureService } from '../../services/fixtures/fixture.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class FixturesEffects {
  constructor(
    private actions$: Actions,
    private fixtureService: FixtureService
  ) {}

  // Run this code when a loadFixtures action is dispatched
  loadFixtures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFixtures),
      switchMap((action) =>
        // Call the getFixturess method, convert it to an observable
        from(this.fixtureService.getFixtures(action.date, action.league)).pipe(
          // Take the returned value and return a new success action containing the fixtures
          map((fixtures) => loadFixturesSuccess({ fixtures: fixtures })),
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadFixturesFailure({ error })))
        )
      )
    )
  );
}