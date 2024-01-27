import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useWindowDimensions} from 'react-native';

import {createUser} from './authFunctions';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton/customButton';
import CustomTextButton from '../../components/customButton/customTextButton';


const SignupScreen = (props) => {
  console.log(props);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const {height} = useWindowDimensions();
  const imageHeight = height * 0.3;

  const onSignUpPressed = () => {
    if (password !== rePassword) {
      console.log('Passwords do not match.');
      return;
    }

    createUser(email, password);
  };


  return (
    
      <View style={styles.container}>
        <View style={styles.logimgView}>
          <Image
            source={require('../../../assets/images/singup.png')}
            style={[styles.loginimg, {height: imageHeight}]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.welcomeText}>Welcome back for Registration</Text>
          <Text style={styles.subText}>
            Sign up to get started with your first tasks
          </Text>
          <View>
            <Text style={styles.InputTitle}>Email Address</Text>
            <CustomInput
              placeholder="Enter Your Email Address"
              value={email}
              setValue={setEmail}
            />
          </View>
          <View>
            <Text style={styles.InputTitle}>Password</Text>
            <CustomInput
              placeholder="Enter Your Password"
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />
          </View>
          <View>
            <Text style={styles.InputTitle}>Confirm Password</Text>
            <CustomInput
              placeholder="Re-enter Your Password"
              value={rePassword}
              setValue={setRePassword}
              secureTextEntry={true}
            />
          </View>
          <CustomButton buttonText="Sign Up" onPress={onSignUpPressed} />
          <View style={styles.signupButtonView}>
            <Text style={styles.signupButtonTitle}>
              Already have an Account?
            </Text>
            <CustomTextButton
              text="Sign In"
              onPress={() => props.navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
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
    maxWidth: 300,
  },
  bottomContainer: {
    paddingHorizontal: 13,
    paddingBottom: '5%',
  },
  welcomeText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  subText: {
    paddingBottom: 18,
    fontSize: 13,
  },
  InputTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    marginTop: 8,
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

export default SignupScreen;
