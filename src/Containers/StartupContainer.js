import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import RouteConstants from '@/Constants/RouteConstants'

const StartupContainer = () => {
  const { Layout, Gutters } = useTheme()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    navigateAndSimpleReset(RouteConstants.MAIN)
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  )
}

export default StartupContainer
