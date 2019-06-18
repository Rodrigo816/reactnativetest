import {TRY_AUTH} from './actionTypes';

export const tryAuth = (payload) => {
  return {
    type: TRY_AUTH,
    payload: payload
  }
}