import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignInContainer } from '@/Containers'
import RouteConstants from '@/Constants/RouteConstants'
import FormContainer from '@/Containers/FormContainer'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={RouteConstants.SIGNIN} component={SignInContainer} />
      <Stack.Screen name={RouteConstants.FORMS} component={FormContainer} />
    </Stack.Navigator>
  )
}

export default MainNavigator
