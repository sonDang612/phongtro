import { Action } from 'redux';

const initState = {
  isLoggedIn: false,
  token: null,
};

const authReducer = (state = initState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
