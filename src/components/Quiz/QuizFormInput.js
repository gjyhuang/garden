  import React, { Component } from 'react';
  import { TextInput, View, Text } from 'react-native';

  export default function QuizFormInput(props) {
    const { input, ...inputProps } = props;
      return (
        <TextInput style={{
          borderWidth: 2,
          borderColor: '#ffffff',
          padding: 5,
          width: 200,
        }}
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          />
      );
  }
