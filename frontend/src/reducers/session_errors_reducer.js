import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullErrors = [];

const SessionErrorReducer = (state = _nullErrors, actions) => {
  Object.freeze(state);
  switch(actions.type) {
    case RECEIVE_SESSION_ERRORS:
      return actions.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
}

export default SessionErrorReducer;