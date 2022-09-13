import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { FixturesState } from './league.reducer';

export const selectFixtures = (state: AppState) => state.fixtures;
export const selectAllFixtures = createSelector(
  selectFixtures,
  (state: FixturesState) => state.fixtures
);