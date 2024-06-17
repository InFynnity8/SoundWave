import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Login from "../components/Login.js";
import OTPInputComponent from "../components/OTP.js";
import ForgottenPassword from "../components/forgottenPassword.js";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Login/>
      {/* <ForgottenPassword/> */}
      {/* <OTPInputComponent/> */}
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    }
});
