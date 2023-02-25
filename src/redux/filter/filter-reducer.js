import {  SET_FILTER } from './filter-types';

//! Create initial state :
const initialState = '';

export const filterReducer = (state = initialState, { type, payload }) => {
  //! state and actions
  switch (type) {
        case SET_FILTER:
      return payload;
    default:
      return state;
  }
};
