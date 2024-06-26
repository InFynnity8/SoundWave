import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/button.js";

const Account = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              size={24}
              color="#0A4A3B"
              style={styles.back}
            />
          </Pressable>
          <Text style={styles.text}>Account</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.field}>
            <Text style={styles.headText}>Username:</Text>
            <Text style={styles.paragraphText}>@username</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.headText}>Email:</Text>
            <Text style={styles.paragraphText}>name@domain.com</Text>
          </View>
          <View style={styles.buttonBox}>
            <Button
              title="Delete account"
              pressed={() => {
                alert("Can't do that yet");
              }}
              buttonStyle={styles.button}
              textStyle={styles.buttonText}
            />
            <FontAwesome5 name="angle-right" size={24} color="red" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  text: {
    color: "#0A4A3B",
    fontSize: 20,
    fontWeight: "600",
    width: "85%",
    textAlign: "center",
  },
  header: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  button: {
    height: 50,
    width: 360,
    alignItems: "Left",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "700",
    borderRadius: "10px",
  },
  buttonBox: {
    marginVertical: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "red",
    fontSize: 16,
    fontWeight: "400",
  },
  headText: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 5,
  },
  paragraphText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
  },
  field: {
    height: 60,
    marginVertical: 5
  }
});
