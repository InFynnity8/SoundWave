import { View, StyleSheet, Text } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import Button from "./button.js";

const OTPInputComponent = ({ onOtpComplete }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify your number</Text>
      <OTPTextInput
        inputCount={5}
        handleTextChange={onOtpComplete}
        containerStyle={styles.otpContainer}
        textInputStyle={styles.input}
      />
        <Button title="Next" buttonStyle={styles.button} textStyle={styles.buttonText}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: "#0A4A3B",
    fontSize: 18,
    fontWeight: "600",
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 50,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    margin: 5,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#0A4A3B",
    color: "white",
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "700",
    borderRadius: "10px",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default OTPInputComponent;
