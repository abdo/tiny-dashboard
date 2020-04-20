import * as actionTypes from './actionTypes';

export const goToProfile = (score) => {
  return {
    type: actionTypes.GO_TO_PROFILE,
  };
};

export const goToHelp = (score) => {
  return {
    type: actionTypes.GO_TO_HELP,
  };
};
