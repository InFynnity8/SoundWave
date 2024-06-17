import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { AntDesign, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/button.js";

const YourUplaods = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={27} color="#0A4A3B" />
          </Pressable>
          <Text style={styles.text}>Your uploads</Text>
          <View style={styles.uploadShuffle}>
            <FontAwesome6 name="shuffle" size={24} color="#0A4A3B" />
            <FontAwesome name="arrow-circle-up" size={27} color="#0A4A3B" />
          </View>
        </View>
        <View>
          <Text style={styles.headText}>No uploads yet</Text>
          <Text style={styles.paragraphText}>
            Your uploads will appear here.
          </Text>
          <Pressable style={styles.buttonUpload}>
            <Button
              title="Upload a track"
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
            />
            <FontAwesome name="arrow-circle-up" size={40} color="rgba(4, 70, 53, 0.59)" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default YourUplaods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    color: "#0A4A3B",
    fontSize: 23,
    fontWeight: "700",
    marginLeft: 30,
  },
  headText: {
    color: "black",
    fontSize: 23,
    fontWeight: "700",
    marginTop: 5,
  },
  paragraphText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
  },
  button: {
    backgroundColor: "rgba(4, 70, 53, 0.59)",
    height: 50,
    width: 160,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 5,
  },
  buttonUpload: {
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  uploadShuffle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 60,
  },
});
