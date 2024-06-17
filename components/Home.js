import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { React, useState } from "react";
import Button from "./button.js";
import Genre from "./Genre.js";
import NewMusic from "./NewMusic.js";
import Trending from "./Trending.js";


const Home = () => {
    const [genre, setGenre] = useState(true);
    const [newMusic, setNewMusic] = useState(false);
    const [trending, setTrending] = useState(false);
       

  const toGenre = () => {
    setGenre(true);
    setNewMusic(false);
    setTrending(false);
  };

  const toNewMusic = () => {
    setGenre(false);
    setNewMusic(true);
    setTrending(false);
  };

  const toTrending = () => {
    setGenre(false);
    setNewMusic(false);
    setTrending(true);
  };

 const checkCategory = () => {
    if (genre) {
       return <Genre/>;
      } else if (newMusic) {
       return <NewMusic/>;
      } else if (trending) {
        return<Trending/>;
      } else {
        return <Genre/>;
      }
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <Button
            title="Genre"
            buttonStyle={genre ? styles.buttonActive : styles.button}
            textStyle={genre ? styles.buttonTextActive : styles.buttonText}
            pressed={toGenre}
          />
          <Button
            title="New Music"
            buttonStyle={newMusic ? styles.buttonActive : styles.button}
            textStyle={newMusic ? styles.buttonTextActive : styles.buttonText}
            pressed={toNewMusic}
          />
          <Button
            title="Trending"
            buttonStyle={trending ? styles.buttonActive : styles.button}
            textStyle={trending ? styles.buttonTextActive : styles.buttonText}
            pressed={toTrending}
          />
        </View>
        {checkCategory()}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "left",
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonActive: {
    backgroundColor: "#0A4A3B",
    color: "white",
    height: 35,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    borderRadius: "20px",
    marginRight: 5,
  },
  buttonTextActive: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "rgba(14, 187, 190, 0.19)",
    color: "white",
    height: 35,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    borderRadius: "20px",
    marginRight: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
  },
});
