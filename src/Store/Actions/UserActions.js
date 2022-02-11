import ACTION_CONSTANTS from '@/Constants/ActionConstants'
import StorageConstants from '@/Constants/StorageConstants'
import { storeJsonData } from '@/Helpers/StorageHelpers'
import { signInUserService } from '@/Services/api/user'
import { request, success, failure } from './index'

export function signInUser(userData) {
  return async function (dispatch) {
    try {
      dispatch(request(ACTION_CONSTANTS.SIGNIN_USER, null))
      let res = await signInUserService(userData)
      await storeJsonData(StorageConstants.USER_DATA, res)
      dispatch(success(ACTION_CONSTANTS.SIGNIN_USER_SUCCESS, res))
    } catch (error) {
      console.error('There is an error in signInUser', error)
      dispatch(failure(ACTION_CONSTANTS.SIGNIN_USER_FAILURE, error))
    }
  }
}
