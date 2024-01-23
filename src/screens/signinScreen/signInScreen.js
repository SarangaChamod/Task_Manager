// signInScreen.js

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton/customButton';
import CustomTextButton from '../../components/customButton/customTextButton';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const imageHeight = height * 0.3;

  const onLogInPressed = () => console.log('Clicked Login Button');
  const onResetPressed = () => console.log('Clicked Reset Password Button');
  const onSignupPressed = () => console.log('Clicked Sign Up Button');

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.scrollViewContainer, styles.container]}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={true}>
      <View style={styles.logimgView}>
        <Image
          source={require('../../../assets/images/login1.png')}
          style={[styles.loginimg, {height: imageHeight}]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.welcomeText}>Welcome to Task Manager</Text>
        <Text style={styles.subText}>
          Efficient Task Manager for streamlined prioritization.
        </Text>
        <Text style={styles.email}>Email Address</Text>

        <CustomInput
          placeholder="saranga.work@gmail.com"
          value={email}
          setValue={setEmail}
        />
        <Text style={styles.password}>Password</Text>

        <CustomInput
          placeholder="Enter your password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.fpassword}>
          <CustomTextButton text="Reset Password"
          onPress={onResetPressed}/>
        </View>

        <CustomButton buttonText="Login" onPress={onLogInPressed} />

        <View style={styles.signupButtonView}>
          <Text style={styles.signupButtonTitle}>New to Task Manager?</Text>
          <CustomTextButton text="Sign Up"
          onPress={onSignupPressed}/>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  logimgView: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  loginimg: {
    maxHeight: '100%',
    width: '100%',
    maxWidth: 400,
  },
  containerBottom: {
    paddingHorizontal: 13,
    paddingBottom: '5%',
  },
  welcomeText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  subText: {
    paddingBottom: 35,
    fontSize: 13,
  },
  email: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  password: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    paddingTop: 13,
  },
  fpassword: {
    alignItems: 'flex-end',
    marginTop: 3,
  },
  signupButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },
  signupButtonTitle: {
    marginRight: 5,
    color: '#A9A9A9',
  },
});

export default SignInScreen;
