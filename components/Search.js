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
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={27} color="#0A4A3B" />
          </Pressable>
          <Pressable>
            <AntDesign name="download" size={24} color="#0A4A3B" />
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
            <TextInput
              placeholder="Songs, Artists & More"
              style={styles.search}
            />
          </View>
          <ScrollView style={styles.body}>
            <Text style={styles.text}>Vibes</Text>
            <View style={styles.cards}>
              <View style={styles.leftCards}>
                <View
                  style={{
                    width: "100%",
                    height: 120,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "red",
                    marginVertical: 10,
                  }}
                >
                  <Text>Hip Pop & Rap</Text>
                </View>
                <View
                style={{
                  width: "100%",
                  height: 150,
                  borderRadius: 7,
                  borderWidth: 2,
                  borderColor: "indigo",
                  marginVertical: 10,
                }}>
                  <Text>R&B</Text>
                </View>
                <View style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "purple",
                    marginVertical: 10,
                  }}>
                  <Text>Workout</Text>
                </View>
                <View style={{
                    width: "100%",
                    height: 150,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "yellow",
                    marginVertical: 10,
                  }}>
                  <Text>Country</Text>
                </View>
                <View style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "violet",
                    marginVertical: 10,
                  }}>
                  <Text>Study</Text>
                </View>
              </View>
              <View style={styles.rightCards}>
                <View style={{
                    width: "100%",
                    height: 100,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "orange",
                    marginVertical: 10,
                  }}>
                  <Text>Electronic</Text>
                </View>
                <View style={{
                    width: "100%",
                    height: 270,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "pink",
                    marginVertical: 10,
                  }}>
                  <Text>Party</Text>
                </View>
                <View style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "blue",
                    marginVertical: 10,
                  }}>
                  <Text>Soul</Text>
                </View>
                <View style={{
                    width: "100%",
                    height: 270,
                    borderRadius: 7,
                    borderWidth: 2,
                    borderColor: "green",
                    marginVertical: 10,
                  }}>
                  <Text>Rock</Text>
                </View>
              </View>
            </View>
          </ScrollView>
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
  body: {
    flex: 1,
    width: "100%",
  },
  cards: {
    height: 800,
    flexDirection: "row",
  },
  leftCards: {
    flex: 1,
    paddingRight: 5,
  },
  rightCards: {
    flex: 1,
    paddingLeft: 5,
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
  text: {
    color: "#0A4A3B",
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 20,
  },
});
