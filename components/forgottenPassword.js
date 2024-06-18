import {
  TextInput,
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Button from "./button.js";
import { useNavigation } from "@react-navigation/native";

const ForgottenPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Enter your phone number</Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          keyboardType="numeric"
        />
        <Button
          title="Next"
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
          pressed={() => navigation.navigate("OTP")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgottenPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  form: {
    height: 400,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 300,
    marginVertical: 50,
    backgroundColor: "white",
    paddingLeft: 15,
    borderWidth: 3,
    borderColor: "#0A4A3B",
    borderRadius: "10px",
    fontSize: 17,
  },
  text: {
    color: "#0A4A3B",
    fontSize: 18,
    fontWeight: "600",
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
    marginTop: 50,
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
