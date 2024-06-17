import { StyleSheet, Text, View, SafeAreaView} from "react-native";
import React from "react";
import Button from "./button.js";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const Library = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Your Library</Text>
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="Liked tracks"
            pressed={() => {
              navigation.navigate("Liked");
            }}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <FontAwesome5 name="angle-right" size={24} color="black" />
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="Playlists"
            pressed={() => {
              navigation.navigate("Playlists");
            }}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <FontAwesome5 name="angle-right" size={24} color="black" />
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="Albums"
            pressed={() => {
              navigation.navigate("Albums");
            }}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <FontAwesome5 name="angle-right" size={24} color="black" />
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="Following"
            pressed={() => {
              navigation.navigate("Following");
            }}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <FontAwesome5 name="angle-right" size={24} color="black" />
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="Stream"
            pressed={() => {
              navigation.navigate("Stream");
            }}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <FontAwesome5 name="angle-right" size={24} color="black" />
        </View>
        <View style={styles.buttonBox}>
          <Button
            title="Your uploads"
            pressed={() => {
              navigation.navigate("Uploads");
            }}
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <FontAwesome5 name="angle-right" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  text: {
    color: "#0A4A3B",
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 20,
  },
  button: {
    color: "white",
    height: 50,
    width: 360,
    alignItems: "Left",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "700",
    borderRadius: "10px",

  },
  buttonBox: {
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
});
