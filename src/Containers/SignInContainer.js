import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { AUTO_CAPITALIZE, TEXT_INPUTS } from '@/Constants/AppConstants'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useForm } from 'react-hook-form'
import RouteConstants from '@/Constants/RouteConstants'
import TextFeild from '@/Components/TextField'
import { VALIDATION } from '@/Constants/ValidationConstants'

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
        <TextFeild
          inputRef={emailAddressRef}
          control={control}
          autoFocus={true}
          defaultValue=""
          displayText={t('signIn.email')}
          errorMessage={errors?.emailAddress ? t('errors.emailInvalid') : ''}
          isRequired={true}
          keyboardType="email-address"
          textContentType="emailAddress"
          onSubmitEditing={() => changeRef(TEXT_INPUTS.EMAIL_ADDRESS)}
          keys={TEXT_INPUTS.EMAIL_ADDRESS}
          validation={{ value: VALIDATION.EMAIL }}
          autoCapitalize={AUTO_CAPITALIZE.NONE}
        />
      </View>
      <View>
        <TextFeild
          inputRef={passwordRef}
          control={control}
          autoFocus={false}
          defaultValue=""
          displayText={t('signIn.password')}
          errorMessage={errors?.password ? t('errors.passwordInvalid') : ''}
          isRequired={true}
          minLength={8}
          textContentType="password"
          secureTextEntry={secureEntry}
          onSubmitEditing={() => changeRef(TEXT_INPUTS.PASSWORD)}
          keys={TEXT_INPUTS.PASSWORD}
          autoCapitalize={AUTO_CAPITALIZE.NONE}
          rightIcon={
            <Icon
              size={22}
              name={secureEntry ? 'md-eye-off' : 'md-eye'}
              type="ionicon"
              color="#2d2d2f"
              onPress={togglePasswordVisibility}
            />
          }
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
