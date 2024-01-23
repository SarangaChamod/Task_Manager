import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTextButton = ({ onPress, text }) => {
  return (
    <View style={styles.ButtonView}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
    buttonText: {
    color: '#007FFF',
    fontWeight: 'bold',
  },
});

export default CustomTextButton;
