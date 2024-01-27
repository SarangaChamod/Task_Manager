import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/screens/signUpScreen/signupScreen';
import SignInScreen from './src/screens/signinScreen/signInScreen';
import ResetPasswordScreen from './src/screens/resetPasswordScreen/resetPasswordScreen';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createStackNavigator();
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.root, backgroundStyle]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Signup'>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});

export default App;
