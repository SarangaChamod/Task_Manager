import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, buttonText}) => {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <View style={styles.ButtonView}>
        <Text style={styles.ButtonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 15,
    marginTop: '5%',
    width: '100%',
    justifyContent: 'center',
  },
  ButtonView: {
    width: '100%',
    alignItems: 'center',
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomButton;
