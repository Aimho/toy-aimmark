import { createAction, ActionType, createReducer } from 'typesafe-actions';

import { ExampleState } from './type';

// action type
const UPDATE_EXAMPLE = 'example/UPDATE_EXAMPLE';

// create action function
export const updateExample = createAction(UPDATE_EXAMPLE)<string>();

// action
const actions = { updateExample };
type Action = ActionType<typeof actions>;

// initialState
const initialState: ExampleState = {
  name: ''
};

// reducer
const example = createReducer<ExampleState, Action>(initialState, {
  [UPDATE_EXAMPLE]: (___, action) => {
    return {
      name: action.payload
    };
  }
});

export default example;
