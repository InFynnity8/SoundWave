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


const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}> 
        <View style={styles.logoContainer}>
          <Image source={require("../assets/Group 3-1.png")} />
          <Text style={styles.text}>SoundWave</Text>
        </View>
        <View  style={styles.form}>
          <TextInput placeholder="Username" style = {styles.input}/>
          <TextInput secureTextEntry={true} placeholder="Password" style = {styles.input}/>
          <Text>Forgot your password?</Text>
          <Button
            title="LOG IN"
            textStyle={styles.buttonText}
            buttonStyle={styles.button}
            pressed={()=>navigation.navigate("Main")}
          />
          <Text>Don't have an account? Sign up</Text>
        </View>
      </View>
        <View>
            <Text style={styles.help}>Need Help?</Text>
        </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    help: {
        margin: 20,
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
    marginBottom: 50
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
