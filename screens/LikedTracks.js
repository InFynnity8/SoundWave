import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";

const LikedTracks = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign
              name="leftcircle"
              size={27}
              color="#0A4A3B"
            />
          </Pressable>
          <Text style={styles.text}>Liked tracks</Text>
          <FontAwesome6 name="shuffle" size={24} color="#0A4A3B" />
        </View>
        <View>
          <AntDesign
            name="search1"
            size={20}
            color="rgba(87, 86, 86, 0.83)"
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search" style={styles.search} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LikedTracks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  search: {
    backgroundColor: "rgba(200, 204, 203, 0.78)",
    height: 40,
    paddingHorizontal: 40,
    fontSize: 17,
    borderRadius: 20,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    zIndex: 10,
    top: 10,
    left: 10,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  text: {
    color: "#0A4A3B",
    fontSize: 23,
    fontWeight: "700",
    textAlign: "center",
  },
});
