import ApiConstants from '@/Constants/ApiConstants'
import { apiClient } from './index'
import { handleError, handleResponse } from './responseHandler'

export const signInUserService = async payload => {
  const url = ApiConstants.LOGIN
  try {
    var res = await apiClient().post(url, payload)
    return handleResponse(res)
  } catch (err) {
    throw handleError(err)
  }
}
