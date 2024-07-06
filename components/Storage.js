import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/button.js";

const Storage = () => {
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
          <Text style={styles.text}>Storage</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.bar}></Text>
          <View style={styles.storageValues}>
            <View style={styles.valueSet}>
              <Text style={styles.valueLabel}>
                <View
                  style={{
                    backgroundColor: "rgba(98, 218, 92, 1)",
                    width: 9,
                    height: 9,
                    marginRight: 10,
                    borderRadius: "100%",
                  }}
                ></View>
                Other apps
              </Text>
              <Text style={styles.value}>0.00KB</Text>
            </View>
            <View style={styles.valueSet}>
              <Text style={styles.valueLabel}>
              <View
                  style={{
                    backgroundColor: "orange",
                    width: 9,
                    height: 9,
                    marginRight: 10,
                    borderRadius: "100%",
                  }}
                ></View>Downloads </Text>
              <Text style={styles.value}>0.00KB</Text>
            </View>
            <View style={styles.valueSet}>
              <Text style={styles.valueLabel}>
              <View
                  style={{
                    backgroundColor: "blue",
                    width: 9,
                    height: 9,
                    marginRight: 10,
                    borderRadius: "100%",
                  }}
                ></View>Cache </Text>
              <Text style={styles.value}>0.00KB</Text>
            </View>
            <View style={styles.valueSet}>
              <Text style={styles.valueLabel}>
              <View
                  style={{
                    backgroundColor: "grey",
                    width: 9,
                    height: 9,
                    marginRight: 10,
                    borderRadius: "100%",
                  }}
                ></View>Free </Text>
              <Text style={styles.value}>0.00KB</Text>
            </View>
          </View>
          <Text style={styles.paragraphText}>
            This will remove all download tracks from being available for online
            for listening
          </Text>
          <Button
            title="Remove all downloads"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
          <Text style={styles.paragraphText}>
            Free up storage by cleaning up your cache. Your downloads won't be
            removed
          </Text>
          <Button
            title="Clear cache"
            buttonStyle={styles.button}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Storage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  bar: {
    height: 7,
    backgroundColor: "grey",
    width: "100%",
    borderRadius: 20,
    marginTop: 10,
  },
  button: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#0A4A3B",
    height: 40,
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontWeight: 600,
    fontSize: 15,
  },
  paragraphText: {
    color: "grey",
    marginVertical: 20,
  },
  storageValues: {
    height: 120,
    marginVertical: 20,
    justifyContent: "space-between",
  },
  valueSet: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  value: {
    color: "grey",
  },
  valueLabel: {
    fontWeight: 500,
    alignItems: "center",
  },
});
