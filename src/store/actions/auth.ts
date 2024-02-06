import * as authServices from '../../services/auth';
import actionTypes from './actionTypes';

export const register = (payload: any) => async (dispatch: any) => {
  try {
    const response = (await authServices.apiRegister(payload)) as any;

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESSFUL,
        data: response.data.token,
      });
    } else {
      const msg = response.data.msg;
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};

export const login = (payload: any) => async (dispatch: any) => {
  try {
    const response = (await authServices.apiLogin(payload)) as any;

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESSFUL,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      data: null,
    });
  }
};

export const logout = () => ({ type: actionTypes.LOGOUT });
