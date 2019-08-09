import { actionTypes }  from './index';
import { fromJS } from 'immutable';

export const mobileNavItem = (booleVal) => ({
  type: actionTypes.MOBILE_NAV_ITEM,
  booleVal: fromJS(booleVal)
});
