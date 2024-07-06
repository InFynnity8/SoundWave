import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Pressable,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AudioPlayer from "../components/AudioPlayer";

const songs = () => {};

const Player = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.deezer.com/chart/0/tracks")
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View  style={styles.tracks}>
      <FlatList
       
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            <Pressable style={styles.trackItem}>
              <Image
                style={{ width: 70, height: 70 }}
                source={{ uri: item.album.cover }}
              />
              <View>
                <Text>{item.title}</Text>
                <Text>{item.artist.name}</Text>
              </View>
              <AudioPlayer source={item.preview} />
            </Pressable>
          </>
        )}
      />
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  trackItem: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  tracks: {
    flex: 1,
  }
});
