import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  LinearGradient,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
// import {BottomModal} from "react-native-modals";

const LikedTracks = () => {
  const navigation = useNavigation();
  const [currentTrack, setCurrentTrack] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={27} color="#0A4A3B" />
          </Pressable>
          <Text style={styles.text}>Liked tracks</Text>
          <FontAwesome6
            onPress={() => setCurrentTrack(!currentTrack)}
            name="shuffle"
            size={24}
            color="#0A4A3B"
          />
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

        {currentTrack && (
          <Pressable style={styles.floatSong}>
            <View>
              <Text>Song playing</Text>
            </View>
          </Pressable>
        )}
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
    position: "relative",
  },
  search: {
    backgroundColor: "rgba(200, 204, 203, 0.78)",
    height: 40,
    paddingHorizontal: 40,
    fontSize: 17,
    borderRadius: 20,
    position: "relative",
  },
  floatSong: {
    height: 50,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "green",
    position: "absolute",
    alignItems: "center",
    bottom: 10,
    left: 20,
    justifyContent: "center",
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
