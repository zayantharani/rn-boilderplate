import axios from 'axios'
import { Config } from '@/Config'
import { store } from '../../Store'

export const apiClient = () => {
  const defaultOptions = {
    timeout: 90000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + store.getState().user.userToken,
    },
  }

  return {
    getBaseUrl: () => {
      return `${Config.API_URL}`
    },
    get: (url, options = {}) => {
      if (!isCompleteUrl(url)) {
        url = `${Config.API_URL}${url}`
      }
      console.log(
        'REQUESTING GET API CALL : \nURL : ',
        `${url}`,
        'OPTIONS : ',
        options,
        'headers: ',
        defaultOptions.headers,
      )
      return axios.get(`${url}`, {
        headers: { ...defaultOptions.headers },
        params: { ...options },
      })
    },
    post: (url, data, options = {}) => {
      if (!isCompleteUrl(url)) {
        url = `${Config.API_URL}${url}`
      }
      console.log(
        'REQUESTING POST API CALL : \nURL : ',
        `${url}`,
        'DATA : ',
        JSON.stringify(data),
        'DEFAULT OPTIONS: ',
        defaultOptions,
        'OPTIONS : ',
        options,
      )
      return axios.post(`${url}`, data, { ...defaultOptions, ...options })
    },
    put: (url, data, options = {}) => {
      if (!isCompleteUrl(url)) {
        url = `${Config.API_URL}${url}`
      }
      console.log(
        'REQUESTING PUT API CALL : \nURL : ',
        `${url}`,
        'DATA : ',
        data,
        'OPTIONS : ',
        options,
      )
      return axios.put(`${url}`, data, { ...defaultOptions, ...options })
    },
    delete: (url, options = {}) => {
      if (!isCompleteUrl(url)) {
        url = `${Config.API_URL}${url}`
      }
      console.log(
        'REQUESTING DELETE API CALL : \nURL : ',
        `${url}`,
        'OPTIONS : ',
        options,
      )
      return axios.delete(`${url}`, { ...defaultOptions, ...options })
    },
  }
}

function isCompleteUrl(url = '') {
  let val = url.indexOf('https://') > -1 || url.indexOf('http://') > -1
  return val
}
