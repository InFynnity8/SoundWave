import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";

const Genre = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.text}>Your Top Genres</Text>
        <View style={styles.genreBox}>
          <View>
            <View style={[styles.genreInnerBox, {backgroundColor: "#52b51d"}]}>
              <Text style={styles.boxText}>Kpop</Text>
              <Image source={require("../assets/kpop.jpg")} style={styles.image}/>
            </View>
            <View style={[styles.genreInnerBox, {backgroundColor: "#2a5585"}]}>
              <Text style={styles.boxText}>R & B</Text>
              <Image source={require("../assets/indie.webp")} style={styles.image}/>
            </View>
          </View>
          <View>
            <View style={[styles.genreInnerBox, {backgroundColor: "#e639a9"}]}>
              <Text style={styles.boxText}>Indie</Text>
              <Image source={require("../assets/indie.webp")} style={styles.image}/>
            </View>
            <View style={[styles.genreInnerBox, {backgroundColor: "rgba(182, 91, 0, 1)"}]}>
              <Text style={styles.boxText}>Pop</Text>
              <Image source={require("../assets/pop.jpg")} style={styles.image}/>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.text}>Browse All</Text>
        <View style={styles.browseBox}>
          <View>
            <View style={[styles.browseInnerBox, {backgroundColor: "#078bb3"}]}>
              <Text style={styles.boxText}>Made For You</Text>
              <Image source={require("../assets/made-for-you.webp")} style={styles.image}/>
            </View>
            <View style={[styles.browseInnerBox, {backgroundColor: "#2050b0"}]}>
              <Text style={styles.boxText}>Music Charts</Text>
              <Image source={require("../assets/music-charts.jpg")} style={styles.image}/>
            </View>
            <View style={[styles.browseInnerBox, {backgroundColor: "#b08c20"}]}>
              <Text style={styles.boxText}>Bollywood</Text>
              <Image source={require("../assets/bollywood.jpg")} style={styles.image}/>
            </View>
          </View>
          <View>
            <View style={[styles.browseInnerBox, {backgroundColor: "#a229b3"}]}>
              <Text style={styles.boxText}>Released</Text>
              <Image source={require("../assets/released.webp")} style={styles.image}/>
            </View>
            <View style={[styles.browseInnerBox, {backgroundColor: "#b02049"}]}>
              <Text style={styles.boxText}>Podcasts</Text>
              <Image source={require("../assets/podcast.webp")} style={styles.image}/>
            </View>
            <View style={[styles.browseInnerBox, {backgroundColor: "#20b071"}]}>
              <Text style={styles.boxText}>Pop Fusion</Text>
              <Image source={require("../assets/pop-fusion.webp")} style={styles.image}/>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Genre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#0A4A3B",
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 20,
  },
  boxText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    width: 75,
  },
  genreBox: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  browseBox: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  genreInnerBox: {
    height: 100,
    width: 180,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    position: "relative",
    overflow: "hidden",
  },
  browseInnerBox: {
    height: 100,
    width: 180,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 90,
    position: "absolute",
    right: -15,
    bottom: -10,
    borderRadius: 5,
    transform: [
        { rotate: '25deg' },
        { skewX: '-7deg' }, 
        { skewY: '-10deg' },  
      ],
  }
});
