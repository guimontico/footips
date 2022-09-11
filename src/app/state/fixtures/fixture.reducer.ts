import { createReducer, on } from '@ngrx/store';
import { FixtureResponse, Fixtures } from "src/app/models/fixtures";

import {
    loadFixtures,
    loadFixturesSuccess,
    loadFixturesFailure,
  } from './fixture.actions';

export interface FixturesState {
  fixtures: FixtureResponse | null;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: FixturesState = {
  fixtures: null,
  error: null,
  status: 'pending',
};

export const fixtureReducer = createReducer(
  // Supply the initial state
  initialState,
  // Trigger loading the fixtures
  on(loadFixtures, (state) => ({ ...state, status: 'loading' })),
  // Handle successfully loaded fixtures
  on(loadFixturesSuccess, (state, { fixtures }) => ({
    ...state,
    fixtures: fixtures,
    error: null,
    status: 'success',
  })),
  // Handle fixtures load failure
  on(loadFixturesFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);