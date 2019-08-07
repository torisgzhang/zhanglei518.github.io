import * as actionTypes from './actionTypes';

export const isMobile = (isMobile) => ({
  type: actionTypes.GET_SCREEN_WIDTH,
  isMobile
});