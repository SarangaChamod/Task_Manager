import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton/customButton';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <AntDesign
          name="left"
          size={30}
          color="black"
          style={[styles.back, {fontWeight: 'bold'}]}
        />
        <Text style={styles.titleText}>Reset Password</Text>
      </View>
      <Text style={styles.subTitleText}>
        {' '}
        Enter your email address and new password for password reset
      </Text>
      <View style={styles.Inputbox}>
        <View style={styles.InputItem}>
          <Text style={styles.InputTitle}>Enter Email Address</Text>
          <CustomInput
            placeholder="saranga.work@gmail.com"
            // value={email}
            // setValue={setEmail}
          />
        </View>
        <View style={styles.InputItem}>
          <Text style={styles.InputTitle}>Enter New Password</Text>
          <CustomInput
            placeholder="New Password"
            // value={email}
            // setValue={setEmail}
          />
        </View>
        <View style={styles.InputItem}>
          <Text style={styles.InputTitle}>Confirm New Password</Text>
          <CustomInput
            placeholder="confirm new password"
            // value={email}
            // setValue={setEmail}
          />
        </View>

        <CustomButton
          buttonText="Reset Password"
          // onPress={onSignUpPressed}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 10},
  title: {
    flexDirection: 'row',
    paddingTop: 40,
  },
  back: {
    marginRight: 8,
  },
  titleText: {
    fontSize: 23,
    color: 'black',
    fontWeight: '500',
  },
  subTitleText: {
    marginTop: 15,
  },
  Inputbox: {
    marginTop: 40,
  },
  InputTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
  },
});

export default MyComponent;
