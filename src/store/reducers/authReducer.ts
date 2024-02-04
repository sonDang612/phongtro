import actionTypes from '../actions/actionTypes';

const initState = {
  isLoggedIn: false,
  token: null,
};

const authReducer = (state = initState, action: any) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESSFUL:
      return { ...state, isLoggedIn: true, token: action.data };

    case actionTypes.REGISTER_FAIL:
      return { ...state, isLoggedIn: false, token: null, msg: action.data };
    default:
      return state;
  }
};

export default authReducer;
