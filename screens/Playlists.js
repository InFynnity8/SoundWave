import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Playlists = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={27} color="#0A4A3B" />
          </Pressable>
          <Text style={styles.text}>Playlists</Text>
        </View>
        <View style={styles.searchContainer}>
          <AntDesign
            name="search1"
            size={20}
            color="rgba(87, 86, 86, 0.83)"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for a playlist"
            style={styles.search}
          />
          <Ionicons name="filter-sharp" size={24} color="black" />
        </View>

        <ScrollView style={styles.list}>
          <Text style={styles.innerText}>Create a playlist</Text>
          <View style= {styles.playlistItem}>
            <AntDesign name="pluscircle" size={24} color="black" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Playlists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    backgroundColor: "rgba(200, 204, 203, 0.78)",
    height: 40,
    paddingHorizontal: 40,
    fontSize: 17,
    borderRadius: 20,
    position: "relative",
    width: "93%",
    marginRight: 5,
  },
  searchIcon: {
    position: "absolute",
    zIndex: 10,
    top: 10,
    left: 10,
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
  list: {
    marginTop: 20,
    width: "100%",
    height: "100%",
  },
  innerText: {
    fontSize: 18,
    marginVertical: 10,
    color: "rgba(150, 154, 153, 1)",
    fontWeight: 600,
  },
  playlistItem: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(200, 204, 203, 0.78)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  }
});
