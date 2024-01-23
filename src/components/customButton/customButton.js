import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, buttonText}) => {
  return (
    <View style={styles.ButtonView}>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.ButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonView: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 15,
    marginTop: '5%', 
    width: '100%', 
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomButton;
