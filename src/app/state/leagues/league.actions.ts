import { createAction, props } from "@ngrx/store";
import { FixtureResponse, Fixtures } from 'src/app/models/fixtures';

export const loadFixtures = createAction('[Fixture Page] Load Fixtures');

export const loadFixturesSuccess = createAction(
  '[Fixture API] Fixture Load Success',
  props<{ fixtures: FixtureResponse }>()
);

export const loadFixturesFailure = createAction(
  '[Fixture API] Fixture Load Failure',
  props<{ error: string }>()
);