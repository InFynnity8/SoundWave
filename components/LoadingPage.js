import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';

const LoadingPage = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Group 3.png")} />
      <Text style={styles.text}>SoundWave</Text>
    </View>
  );
};

export default LoadingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#0A4A3B",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "700",
  },
});
