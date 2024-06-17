import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/button.js"

const Albums = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={27} color="#0A4A3B" />
          </Pressable>
          <Text style={styles.text}>Albums</Text>
        </View>
        <View>
            <Text style={styles.headText}>No albums yet</Text>
            <Text style={styles.paragraphText}>Albums you have created or liked will appear here.</Text>
            <Button title= "Search for albums" buttonStyle= {styles.button} textStyle={styles.buttonText}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Albums;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  text: {
    color: "#0A4A3B",
    fontSize: 23,
    fontWeight: "700",
    width: "85%",
    textAlign: "center",
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
    backgroundColor: "#0A4A3B",
    height: 50,
    width: 160,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  }
});
