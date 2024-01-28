// authFunctions.js
import auth from '@react-native-firebase/auth';
import ToastMessage from '../../components/ToastMessage/toastMessage';

export const createUser = (email, password) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
      ToastMessage({message: 'User account created & signed in!'});
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        ToastMessage({message: 'That email address is already in use!'});
      } else if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        ToastMessage({message: 'That email address is invalid!'});
      } else {
        console.error('Firebase Error:', error);
      }
    });
};
