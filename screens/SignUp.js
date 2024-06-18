import {
  TextInput,
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import Button from "../components/button.js";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/Group 3-1.png")} />
          <Text style={styles.text}>SoundWave</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.labelInput}>
            <Text style={styles.label}>Full name</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.labelInput}>
            <Text style={styles.label}>Username <Text style={styles.required}>*</Text></Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.labelInput}>
            <Text style={styles.label}>Password <Text style={styles.required}>*</Text></Text>
            <TextInput secureTextEntry={true} style={styles.input} />
          </View>
          <View style={styles.labelInput}>
            <Text style={styles.label}>Confirm password <Text style={styles.required}>*</Text></Text>
            <TextInput secureTextEntry={true} style={styles.input} />
          </View>
          <View style={styles.labelInput}>
            <Text style={styles.label}>Country</Text>
            <TextInput style={styles.input} keyboardType="numeric" />
          </View>
          <Button
            title="SIGN UP"
            textStyle={styles.buttonText}
            buttonStyle={styles.button}
            pressed={() => navigation.navigate("Main")}
          />
          <Pressable
            style={styles.para}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <Text>Already have an account?</Text>
            <Text style={styles.linkText}> Log in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  required: {
    color: "red",
  },
  help: {
    margin: 20,
  },
  linkText: {
    color: "#0A4A3B",
    fontWeight: "500",
  },
  para: {
    flexDirection: "row",
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
    marginBottom: 10,
  },
  form: {
    alignItems: "center",
  },
  label: {
    fontSize: 16,
  },
  input: {
    height: 45,
    width: 350,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    paddingLeft: 15,
    fontSize: 17,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0A4A3B",
  },
  labelInput: {
    marginBottom: 10,
  },
  text: {
    color: "#0A4A3B",
    fontSize: 23,
    fontStyle: "italic",
    fontWeight: "700",
  },
  button: {
    backgroundColor: "rgba(14, 187, 190, 0.19)",
    color: "white",
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "700",
    borderRadius: "10px",
    marginVertical: 10
  },
  buttonText: {
    color: "#0A4A3B",
    fontSize: 18,
    fontWeight: "700",
  },
});
