import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { TEXT_INPUTS } from '@/Constants/AppConstants'
import { Colors } from '@/Theme/Variables'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { Input } from 'react-native-elements/dist/input/Input'
import { navigate, navigateAndSimpleReset } from '@/Navigators/utils'
import { Controller, useForm } from 'react-hook-form'
import RouteConstants from '@/Constants/RouteConstants'

const SignInContainer = () => {
  const { t } = useTranslation()
  // const dispatch = useDispatch()
  const { handleSubmit, control, errors } = useForm()
  const emailAddressRef = React.useRef(null)
  const passwordRef = React.useRef(null)
  const { Common, Fonts, Gutters, Layout } = useTheme()

  // States
  const [secureEntry, setSecureEntry] = useState(true)

  //Selectors

  const togglePasswordVisibility = () => {
    setSecureEntry(!secureEntry)
  }

  const signInPressed = ({ emailAddress, password }) => {
    console.log(emailAddress, password)
    navigateAndSimpleReset(RouteConstants.FORMS)
  }

  const changeRef = inputName => {
    switch (inputName) {
      case TEXT_INPUTS.EMAIL_ADDRESS:
        handleSubmit(signInPressed)()
        return passwordRef.current.focus()
      case TEXT_INPUTS.PASSWORD:
        handleSubmit(signInPressed)()
        return
      default:
        return
    }
  }

  return (
    <View style={[Layout.fill, Gutters.largeHPadding, Gutters.largeVPadding]}>
      <View style={Layout.colVCenter}>
        <Brand />
      </View>
      <Text style={[Gutters.regularVMargin, Fonts.titleSmall]}>
        {t('signIn.desc')}
      </Text>
      <View>
        <Text style={[Fonts.textSmall]}>{t('signIn.email')}</Text>
        <Controller
          name={TEXT_INPUTS.EMAIL_ADDRESS}
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              ref={emailAddressRef}
              value={value}
              onBlur={onBlur}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              autoFocus={true}
              onSubmitEditing={() => changeRef(TEXT_INPUTS.EMAIL_ADDRESS)}
              onChangeText={onChange}
              errorStyle={{ color: Colors.error }}
              errorMessage={errors?.emailAddress?.message}
            />
          )}
          rules={{
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t('errors.emailInvalid'),
            },
          }}
          defaultValue=""
        />
      </View>
      <View>
        <Text style={[Fonts.textSmall]}>{t('signIn.password')}</Text>
        <Controller
          name={TEXT_INPUTS.PASSWORD}
          control={control}
          render={({ onChange, onBlur, value }) => (
            <Input
              ref={passwordRef}
              value={value}
              onBlur={onBlur}
              textContentType="password"
              secureTextEntry={secureEntry}
              autoCapitalize="none"
              returnKeyType="done"
              onChangeText={onChange}
              onSubmitEditing={() => changeRef(TEXT_INPUTS.PASSWORD)}
              rightIcon={
                <Icon
                  size={22}
                  name={secureEntry ? 'md-eye-off' : 'md-eye'}
                  type="ionicon"
                  color="#2d2d2f"
                  onPress={togglePasswordVisibility}
                />
              }
              errorStyle={{ color: Colors.error }}
              errorMessage={errors?.password ? t('errors.passwordInvalid') : ''}
            />
          )}
          rules={{
            required: true,
            minLength: 8,
          }}
          defaultValue=""
        />
      </View>

      <TouchableOpacity
        style={[Common.button.rounded, Gutters.largeVMargin]}
        onPress={handleSubmit(signInPressed)}
      >
        <Text style={Fonts.textRegular}>{t('signIn.desc')}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignInContainer
