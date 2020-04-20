import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  displayedPage: 'profile',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GO_TO_PROFILE:
      return {
        ...state,
        displayedPage: 'profile',
      };
    case actionTypes.GO_TO_HELP:
      return {
        ...state,
        displayedPage: 'help',
      };
    default:
      return state;
  }
};
