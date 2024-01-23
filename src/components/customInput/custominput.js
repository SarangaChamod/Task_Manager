import { View, Text, TextInput, StyleSheet,secureTextEntry } from 'react-native';
import React from 'react';

const CustomInput = (props) => {
  const { value, setValue, placeholder, leftSpace ,secureTextEntry} = props;

  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={{
          borderWidth: 1,
          borderRadius: 6,
          borderColor: '#D6D6D6',
           width: '100%',
          height: 45,
          marginTop: 4,
          paddingLeft: 8,
        }}
        placeholderTextColor="#A9A9A9"
      />
    </View>
  );
};

export default CustomInput;
