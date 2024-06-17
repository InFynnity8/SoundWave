import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  Modal,
} from "react-native";
import Button from "./button.js";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";



const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#169CA1", "#169CA1","#071f1b", "black"]}
        style={styles.linearGradient}
      >
        <ImageBackground
          source={require("../assets/backgroundimage.jpg")}
          resizeMode="cover"
          style={styles.imageContainer}
        />
         <View style={styles.bottomContainer}>
          <Text style={styles.text}>
            From the <Text style={styles.textCustom}>latest</Text> to the
            <Text style={styles.textCustom}> greatest </Text>
            hit, play your favorite tracks on
            <Text style={styles.textCustomLogo}> SoundWave </Text>
            now!
          </Text>
          <View style={styles.bar1}><View style={styles.bar2}></View></View>
          <Button
            title="Get Started"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
            pressed={()=>{
              navigation.navigate("SignIn")
            }}
          />
        </View>
      </LinearGradient>
    
     
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-end",
  },
  imageContainer: {
    flex: 2,
    justifyContent: "flex-end",
    opacity: 0.05,
  },
  linearGradient: {
    flex: 1,
    position: "relative",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    padding: 30,
    textAlign: "center",
  },
  textCustom: {
    color: "#169CA1",
    fontWeight: "700",
  },
  textCustomLogo: {
    color: "#169CA1",
    fontWeight: "700",
    fontStyle: "italic",
  },
  bar1: {
    width: 100,
    height: 5,
    backgroundColor: "#169CA1",
    marginBottom: 20,
    borderRadius: "100px",
  },
  bar2: {
    width: 50,
    height: 5,
    backgroundColor: "white",
    marginBottom: 20,
    borderRadius: "100px",
  },
  bottomContainer: {
    backgroundColor: "black",
    width: "98%",
    height: "40%",
    borderTopRightRadius: "30px",
    borderTopLeftRadius: "30px",
    borderRadius: "30px",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#169CA1",
    color: "white",
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "700",
    borderRadius: "30px",
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
