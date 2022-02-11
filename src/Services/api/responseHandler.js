import {
  HTTP_STATUS_CODES,
  STATUS_CODES_TYPES,
} from '../../Constants/HttpStatusCodes'

export function handleResponse(response) {
  if (HTTP_STATUS_CODES[response.status].type === STATUS_CODES_TYPES.SUCCESS) {
    console.log('RESPONSE SUCCESS IN API CALL : \n', response.data)
    return response.data.data ? response.data.data : response.data
  } else {
    throw response
  }
}

export function handleError(error) {
  console.log('RESPONSE ERROR IN API CALL : \n', error)
  if (error.response) {
    let errorMessage = {
      message: error?.response?.data.message,
      errorKey: error?.response?.data.errorKey,
    }
    throw errorMessage
  } else {
    throw error
  }
}
