import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Shazam = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
        name="waveform"
        size={200}
        color="rgba(9, 202, 225, 1)"
      />
    </SafeAreaView>
  );
};

export default Shazam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});
