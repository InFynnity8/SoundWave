import {
  TextInput,
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import Button from "./button.js";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/Group 3-1.png")} />
          <Text style={styles.text}>SoundWave</Text>
        </View>
        <View style={styles.form}>
          <TextInput placeholder="Username" style={styles.input} />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
          />
          <Pressable onPress={() => navigation.navigate("ForgottenPassword")}>
          <Text>Forgot your password?</Text>
          </Pressable>
          <Button
            title="LOG IN"
            textStyle={styles.buttonText}
            buttonStyle={styles.button}
            pressed={() => navigation.navigate("Main")}
          />
          <Pressable
            style={styles.para}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text>Don't have an account? </Text>
            <Text style={styles.linkText}>Sign up</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Pressable>
          <Text style={styles.help}>Need Help?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  help: {
    margin: 20,
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
    marginBottom: 50,
  },
  form: {
    height: 400,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "rgba(14, 187, 190, 0.19)",
    paddingLeft: 15,
    fontSize: 17,
  },
  text: {
    color: "#0A4A3B",
    fontSize: 23,
    fontStyle: "italic",
    fontWeight: "700",
  },
  linkText: {
    color: "#0A4A3B",
    fontWeight: "500",
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
    marginTop: 50,
    marginBottom: 50,
  },
  buttonText: {
    color: "#0A4A3B",
    fontSize: 18,
    fontWeight: "700",
  },
});
