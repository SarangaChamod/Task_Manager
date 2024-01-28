import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../components/customInput';
import CustomButton from '../../components/customButton/customButton';
import ToastMessage from '../../components/ToastMessage/toastMessage';
import auth from '@react-native-firebase/auth';
import {useWindowDimensions} from 'react-native';

const MyComponent = props => {
  console.log(props);
  const [email, setEmail] = useState('');

  const {height} = useWindowDimensions();
  const imageHeight = height * 0.3;

  const onResetPasswordPressed = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      ToastMessage({message: 'Password reset email sent. Check your email.'});
      return;
    } catch (error) {
      ToastMessage({
        message: 'Password Reset Email Not Delivered. Please try again.',
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* <View style={styles.title}>
        <AntDesign
          name="left"
          size={30}
          color="black"
          style={[styles.back, {fontWeight: 'bold'}]}
        />
        <Text style={styles.titleText}>Reset Password</Text>
      </View> */}
        <View style={styles.resetimgView}>
          <Image
            source={require('../../../assets/images/reset.png')}
            style={[styles.resetimg, {height: imageHeight}]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.Inputbox}>
          <View style={styles.InputItem}>
            <Text style={styles.InputTitle}>Forgot your password?</Text>
            <CustomInput
              placeholder="saranga.work@gmail.com"
              value={email}
              setValue={setEmail}
            />
          </View>
          <CustomButton
            buttonText="Send Password reset link"
            onPress={onResetPasswordPressed}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  box: {
    marginHorizontal: 10,
  },
  resetimgView: {
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10
  },
  resetimg: {
    maxHeight: '100%',
    width: '100%',
    maxWidth: 300,
  },

  Inputbox: {
    marginTop: 20,
  },
  InputTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    marginBottom:4
  },
});

export default MyComponent;
