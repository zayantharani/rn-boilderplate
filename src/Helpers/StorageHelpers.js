import AsyncStorage from '@react-native-async-storage/async-storage'

//Setting Values
export const storeString = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value)
  } catch (error) {
    return error
  }
}

export const storeBoolean = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value.toString())
  } catch (error) {
    return error
  }
}

export const storeJsonData = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    return error
  }
}

//Getting Values
export const getStoredString = async key => {
  try {
    let value = await AsyncStorage.getItem(key)
    return value
  } catch (error) {
    return error
  }
}

export const getStoredBoolean = async key => {
  try {
    let value = await AsyncStorage.getItem(key)
    return value === 'true' //Returns 'true' or 'false'
  } catch (error) {
    return error
  }
}

export const getStoredJsonData = async key => {
  try {
    let jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    return error
  }
}

export const clearStore = async () => {
  return await AsyncStorage.clear()
}
