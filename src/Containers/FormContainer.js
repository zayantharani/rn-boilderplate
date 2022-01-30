import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { Input } from 'react-native-elements/dist/input/Input'
import { useTranslation } from 'react-i18next'

const FormContainer = () => {
  const { t } = useTranslation()
  const { Layout, Gutters, Fonts } = useTheme()

  return (
    <ScrollView
      style={[Layout.fill, Gutters.largeVMargin, Gutters.largeHPadding]}
    >
      <View style={Layout.colVCenter}>
        <Brand />
      </View>
      <Text style={[Gutters.regularVMargin, Fonts.textRegular]}>
        {t('form.desc')}
      </Text>
      <Input placeholder="Name" />
    </ScrollView>
  )
}

export default FormContainer
