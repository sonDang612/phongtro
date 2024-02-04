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
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};
