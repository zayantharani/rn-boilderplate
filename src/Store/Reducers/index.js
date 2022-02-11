import { combineReducers } from 'redux'
import user from './UserReducer'
import ACTION_CONSTANTS from '../../Constants/ActionConstants'

const appReducer = combineReducers({
  user: user,
})

const rootReducer = (state, action) => {
  if (action.type === ACTION_CONSTANTS.SIGNOUT_USER) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
