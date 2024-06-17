import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={27} color="#0A4A3B" />
          </Pressable>
          <Pressable>
            <AntDesign name="download" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.content}>
          <View>
            <AntDesign
              name="search1"
              size={20}
              color="rgba(87, 86, 86, 0.83)"
              style={styles.searchIcon}
            />
            <TextInput placeholder="Songs, Artists & More" style={styles.search} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
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
});
