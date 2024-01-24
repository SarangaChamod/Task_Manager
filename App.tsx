/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SignInScreen from './src/screens/signinScreen/signInScreen';
import SignupScreen from './src/screens/signUpScreen/signupScreen';
import ResetPasswordScreen from './src/screens/resetPasswordScreen/resetPasswordScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.root, backgroundStyle]}>
      <ResetPasswordScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#FAFAFA',
  },
});

export default App;
