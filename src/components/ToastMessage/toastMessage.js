// ReusableToast.js
import { ToastAndroid } from 'react-native';

const toastMessage = ({ message}) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
    25,
    50
  );

  return null; 
};

export default toastMessage;
