import ACTION_CONSTANTS from '../../Constants/ActionConstants'

export const initialState = {
  userData: null,
  userToken: null,
  isLoading: false,
  error: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_CONSTANTS.SIGNIN_USER:
      return { ...state, isLoading: true }

    case ACTION_CONSTANTS.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userData: payload,
        userToken: payload?.token,
        error: null,
      }

    case ACTION_CONSTANTS.SIGNIN_USER_FAILURE:
      return { ...state, isLoading: false, error: payload }

    default:
      return state
  }
}
