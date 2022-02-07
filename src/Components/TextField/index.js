import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { Controller } from 'react-hook-form'
import { AUTO_CAPITALIZE } from '@/Constants/AppConstants'
import { Input } from 'react-native-elements'
import { Colors } from '@/Theme/Variables'

const TextFeild = ({
  keys,
  control,
  displayText,
  validation,
  errorMessage,
  isRequired,
  defaultValue,
  inputRef,
  textContentType,
  keyboardType,
  autoCapitalize,
  autoFocus,
  returnKeyType,
  onSubmitEditing,
  secureTextEntry,
  rightIcon,
  minLength,
}) => {
  const { Fonts } = useTheme()

  return (
    <View>
      <Text style={[Fonts.textSmall]}>{displayText}</Text>
      <Controller
        name={keys}
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            ref={inputRef}
            value={value}
            onBlur={onBlur}
            textContentType={textContentType}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            returnKeyType={returnKeyType}
            autoFocus={autoFocus}
            onSubmitEditing={onSubmitEditing}
            onChangeText={onChange}
            errorStyle={{ color: Colors.error }}
            errorMessage={errorMessage}
            secureTextEntry={secureTextEntry}
            rightIcon={rightIcon}
          />
        )}
        rules={{
          required: isRequired,
          minLength: minLength,
          pattern: {
            ...validation,
            message: errorMessage,
          },
        }}
        defaultValue={defaultValue}
      />
    </View>
  )
}

TextFeild.propTypes = {
  autoCapitalize: PropTypes.oneOf([
    AUTO_CAPITALIZE.NONE,
    AUTO_CAPITALIZE.SENTENCES,
    AUTO_CAPITALIZE.WORDS,
    AUTO_CAPITALIZE.CHARACTERS,
    undefined,
  ]),
  key: PropTypes.string,
  minLength: PropTypes.number,
  secureTextEntry: PropTypes.bool,
}

TextFeild.defaultProps = {
  key: '',
  autoCapitalize: undefined,
  secureTextEntry: false,
  minLength: 0,
}

export default TextFeild
